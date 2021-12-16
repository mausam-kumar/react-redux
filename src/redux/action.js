import { INCREMENT,DECREMENT,ADD_TODO, INCREMENT_COUNT,DECREMENT_COUNT,MULTIPLY,DIVIDE} from "./actionType.js";

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

export const incrementCount = (payload) => {
    return{
        type: INCREMENT_COUNT,
        payload
    }
}
export const decrementCount = (payload) => {
    return{
        type: DECREMENT_COUNT,
        payload
    }
}

export const multiply = (payload) => {
    return{
        type: MULTIPLY,
        payload
    }
}

export const divide = (payload) => {
    return{
        type: DIVIDE,
        payload
    }
}