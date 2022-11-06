import * as fs from 'fs'
import { PairDetails } from './types';
const GateApi = require('gate-api');

const client = new GateApi.ApiClient();
export const gateIOapi = new GateApi.SpotApi(client);

export const loadGateIoCreds = () => {
    const GATEIO_API = process.env.GATEIO_API
    const GATEIO_SECRET = process.env.GATEIO_SECRET

    // TODO connect with account
    // return Configuration(key=GATEIO_API, secret=GATEIO_SECRET)
}

export const getAllCurrencies = async () => {
    const allCurrencies = await gateIOapi.listCurrencies()

    fs.writeFile('currencies.json', JSON.stringify(allCurrencies.body.map((currency: any) => currency.currency)), () => {})
}

export const searchAndUpdateCurrencies = async () => {
    setInterval(async () => {
        await getAllCurrencies()
    }, 20000)
}

export const getPairsWithPrice = async (): Promise<PairDetails[]> => {
    const result = await gateIOapi.listTickers()

    const pairsWithPrice = result.body.map((ticker: any) => ({
        currencyPair: ticker.currencyPair,
        lastPrice: ticker.last,
        changePercentage: ticker.changePercentage,
        baseVolume: ticker.baseVolume,

    }))

    return pairsWithPrice
}