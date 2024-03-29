import fetch from "node-fetch"
import * as fs from 'fs'

const searchExpression = 'Binance Will List'

export const getLastListedCoin = async () => {
    let latestAnnouncement
    try {
        const response = await fetch('https://www.binance.com/bapi/composite/v1/public/cms/article/catalog/list/query?catalogId=48&pageNo=1&pageSize=50&rnd=') // do zmiany -> najpewniej zmienili link
        latestAnnouncement = await response?.json() as any
    } catch (e) {
        // console.error(e);
      }

    const lastTitles = latestAnnouncement?.data.articles.map((article: {title: string}) => article.title) as string[] ?? []

    const filteredTitles = lastTitles.filter(title => title.includes(searchExpression))

    return filteredTitles.map(title => title.substring(title.indexOf('(') + 1, title.indexOf(')')))
}

export const searchAndUpdateList = () => {
    let latestCoin: string[] = []
    setInterval(async () => {
        const lastListedCoin = await getLastListedCoin()

        if (JSON.stringify(latestCoin) !== JSON.stringify(lastListedCoin)) {
            latestCoin = lastListedCoin
            fs.writeFile('lastListingCoins.json', JSON.stringify(latestCoin), () => {})
            console.log(lastListedCoin)
        }
        //in future: 0.55s
    }, 5000)
}
