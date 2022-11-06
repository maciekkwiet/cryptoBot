import * as fs from 'fs'
import { getPairsWithPrice } from './gateIoUtils';
import { BigMoveCurrency, PairDetails } from './types';

export const searchMoveCurrencies = async (interval = 10, percentageDifference = 3.5, baseVolume = 1000000) => {
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

            if (Math.abs(1 - Number(oldPair.lastPrice)/Number(newPair?.lastPrice)) > (percentageDifference / 100) &&
                Number(newPair?.baseVolume) > baseVolume) {
                const tokenProp = {
                    pair: oldPair.currencyPair,
                    oldPrice: oldPair.lastPrice,
                    newPrice: newPair?.lastPrice,
                    volume: newPair?.baseVolume,
                    date: new Date(),
                }
                bigMoveCurrencies.push(tokenProp)
                console.log(tokenProp)
                // TODO save with date and values
            }
        })

        fs.writeFile('bigMoveCurrencies.json', JSON.stringify(bigMoveCurrencies), () => {})
    }, interval * 1000)
}