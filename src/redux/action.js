import { INCREMENT,DECREMENT,ADD_TODO } from "./actionType.js";

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

export const addTodo = (payload) => {
    return{
        type: ADD_TODO,
        payload
    }
}