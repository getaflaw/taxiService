import {combineReducers} from "redux";
import {logInReducer} from "./loginReducer";


export const rootReducer = combineReducers({login: logInReducer})