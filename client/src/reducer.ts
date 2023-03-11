import { ADD_COIN_PAIR } from "./constants";

export default (state = null, action) => {
    switch (action.type) {
        case ADD_COIN_PAIR: 
            return {
                ...state,
                coinPairs: [...action.payload]
            } 
        default: 
            return state 
    } 
} 