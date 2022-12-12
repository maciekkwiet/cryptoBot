import { onNewBigMove } from '@controllers/sockets/onNewBigMove';
import * as fs from 'fs'
import { getPairsWithPrice } from './gateIoUtils';
import { BigMoveCurrency, PairDetails } from './types';

export const searchMoveCurrencies = async (interval = 30, percentagePriceDifference = 5, percentageVolumeDifference = 10, baseVolume = 5000000) => {
    setInterval(async () => {
        const newPairsWithPrice = await getPairsWithPrice()
        const oldPairsWithPriceStringify = await fs.readFileSync('pairsWithPrice.json', 'utf8')
        const oldPairsWithPrice = JSON.parse(oldPairsWithPriceStringify) as PairDetails[]
    
        fs.writeFile('oldPairsWithPrice.json', oldPairsWithPriceStringify, () => {})
        fs.writeFile('pairsWithPrice.json', JSON.stringify(newPairsWithPrice), () => {})

        const oldBigMoveCurrenciesStringify = await fs.readFileSync('bigMoveCurrencies.json', 'utf8')
        const bigMoveCurrencies = JSON.parse(oldBigMoveCurrenciesStringify) as BigMoveCurrency[]

        oldPairsWithPrice.forEach(oldPair => {
            const newPair = newPairsWithPrice.find(pair => pair.currencyPair === oldPair.currencyPair)

            if ((Math.abs(1 - Number(oldPair.lastPrice)/Number(newPair?.lastPrice)) > (percentagePriceDifference / 100) ||
                    Math.abs(1 - Number(oldPair.baseVolume)/Number(newPair?.baseVolume)) > (percentageVolumeDifference / 100)) &&
                    Number(newPair?.baseVolume) > baseVolume) {
                const percentagePriceChange = Number(oldPair.lastPrice) > Number(newPair?.lastPrice) ? 
                    (((Number(oldPair?.lastPrice) - Number(newPair?.lastPrice)) / Number(oldPair.lastPrice))) :
                    ((Number(newPair?.lastPrice) - Number(oldPair.lastPrice)) / Number(oldPair.lastPrice))
                const percentageVolumeChange = Number(oldPair.baseVolume) > Number(newPair?.baseVolume) ? 
                    (((Number(oldPair?.baseVolume) - Number(newPair?.baseVolume)) / Number(oldPair.baseVolume))) :
                    ((Number(newPair?.baseVolume) - Number(oldPair.baseVolume)) / Number(oldPair.baseVolume))
                const tokenProp = {
                    pair: oldPair.currencyPair,
                    oldPrice: oldPair.lastPrice,
                    newPrice: newPair?.lastPrice,
                    newVolume: newPair?.baseVolume ? Number.parseFloat(newPair?.baseVolume)?.toFixed(2) : 0,
                    oldVolume: oldPair?.baseVolume ? Number.parseFloat(oldPair?.baseVolume)?.toFixed(2) : 0,
                    date: new Date(),
                    percentagePriceChange: Number(oldPair.lastPrice) > Number(newPair?.lastPrice) ? `-${(percentagePriceChange * 100).toFixed(2)}` : `+${(percentagePriceChange * 100).toFixed(2)}`,
                    percentageVolumeChange: Number(oldPair.baseVolume) > Number(newPair?.baseVolume) ? `-${(percentageVolumeChange * 100).toFixed(2)}` : `+${(percentageVolumeChange * 100).toFixed(2)}`
                }
                bigMoveCurrencies.push(tokenProp)
                console.log(tokenProp)
                onNewBigMove(tokenProp)
            }
        })

        fs.writeFile('bigMoveCurrencies.json', JSON.stringify(bigMoveCurrencies), () => {})
    }, interval * 1000)
}