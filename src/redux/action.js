import { INCREMENT,DECREMENT } from "./actionType.js";

export const incrementFn = (payload) => {
    return{
        type: INCREMENT,
        payload: payload
    }
}

export const decrementFn = (payload) => {
    return{
        type: DECREMENT,
        payload: payload
    }
}