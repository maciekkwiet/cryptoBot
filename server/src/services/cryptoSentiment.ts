import fetch from "node-fetch"

export const getCryptoSentiment = async (numberOfDays: number = 1000) => {
    const response = await fetch("https://alternative.me/api/crypto/fear-and-greed-index/history", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
          "cache-control": "no-cache",
          "content-type": "application/json;charset=UTF-8",
          "pragma": "no-cache",
          "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin"
        },
        "body": `{\"days\":${numberOfDays}}`,
        "method": "POST",
      });

    const result = await response.json()

    const values = result.data.datasets[0].data
    const labels = result.data.labels
    const preparedData = labels.map((label: string, index: number) => ({name: label, value: values[index]}))

    return preparedData
}
