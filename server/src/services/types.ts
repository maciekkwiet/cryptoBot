export interface PairDetails {
    currencyPair: string,
    lastPrice: string,
    changePercentage: string,
    baseVolume: string,
}

export interface BigMoveCurrency {
    pair: string,
    oldPrice: string,
    newPrice?: string,
    volume?: string,
    date: Date,
}
