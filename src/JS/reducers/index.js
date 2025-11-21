import toDoReducer from "./toDoReducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers
({toDoReducer});

export default rootreducer;