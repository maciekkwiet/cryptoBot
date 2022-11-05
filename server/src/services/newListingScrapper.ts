import {gateIOapi} from './gateIoCreds'
import fetch from "node-fetch"
const fs = require('fs');

export const getLastListedCoin = async () => {
    const response = await fetch('https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=50&rnd=');
    const latestAnnouncement = await response.json();

    const lastTitles = (latestAnnouncement as any).data.articles.map((article: any) => article.title) as string[]

    const searchExpression = 'Binance Will List'
    const filteredTitles = lastTitles.filter(title => title.includes(searchExpression))

    return filteredTitles.map(title => title.substring(title.indexOf('(') + 1, title.indexOf(')')))
}

export const searchAndUpdateList = () => {
    setInterval(async () => {
        const latestCoin = await getLastListedCoin()

        fs.writeFile('lastListingCoins.txt', latestCoin.toString(), () => {})
        //0.55s
    }, 5000)
}

export const getAllCurrencies = async () => {
    setInterval(async () => {
        const allCurrencies = await gateIOapi.listCurrencies()

        fs.writeFile('currencies.txt', allCurrencies.body.map((currency: any) => currency.currency).toString(), () => {})
    }, 20000)
}
