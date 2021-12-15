import { INCREMENT, DECREMENT } from "./actionType.js";

const initState = {
    count:0
}

export default (state=initState, action) => {
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
