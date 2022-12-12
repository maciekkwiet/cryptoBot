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
    oldVolume?: string | number,
    newVolume?: string | number,
    date: Date,
    percentagePriceChange?: string,
    percentageVolumeChange?: string,
}
