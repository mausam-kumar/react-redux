import { INCREMENT, DECREMENT, ADD_TODO ,INCREMENT_COUNT,DECREMENT_COUNT,MULTIPLY,DIVIDE} from "./actionType.js";

const initState = {
    count:0
}

const todoState = {
    todos:[],
    defaultCount:0
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
          ...state,
          todos:[...state.todos,payload]
        }
      }
      case INCREMENT_COUNT:{
        return {
          ...state,
          defaultCount:state.defaultCount+ payload
        }
          
        
      }
      case DECREMENT_COUNT:{
        return{
          ...state,
          defaultCount : state.defaultCount - payload
        }
      }
      case MULTIPLY:{
        return{
          ...state,
          defaultCount : state.defaultCount * payload
        }
      } 
      case DIVIDE:{
        return{
          ...state,
          defaultCount : Math.floor(state.defaultCount / payload)
        }
      } 
      default:
        return state
    }
}