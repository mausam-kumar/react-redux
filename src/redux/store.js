import { createStore } from "redux";
import {reducer,secondReducer} from "./reducer.js";

export const store = createStore(reducer);

export const todoStore = createStore(secondReducer)




