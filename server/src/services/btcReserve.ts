import fetch from "node-fetch"

export const getBTCReserve = async (date?: number) => {
    const dateNow = Date.now()
    const response = await fetch(`https://charts.maxdata.app//rbtc?from=1604673013889&to=${date ?? dateNow}&limit=100&tr=168`)

    const result = await response.json()

    return result
}