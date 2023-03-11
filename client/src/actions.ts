import { ADD_COIN_PAIR } from "./constants";

const addCoinPair = (payload) => {
    return {
        type: ADD_COIN_PAIR,
        payload
    }
}

export default addCoinPair;