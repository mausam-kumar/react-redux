import { INCREMENT, DECREMENT, ADD_TODO } from "./actionType.js";

const initState = {
    count:0
}

const todoState = {
    todos:[]
}

export const reducer = (state=initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
          ...state,count:state.count+action.payload
      };

    case DECREMENT:
      return {
        ...state,count:state.count-action.payload
    };
    default:
      break;
  }
};

export const secondReducer = (state=todoState, {type,payload}) =>{
    switch (type) {
    
      case ADD_TODO:{
        return {
          todos:[...state.todos,payload]
        }
      }
      default:
        return state
    }
}