import {combineReducers} from "redux";
import {logInReducer} from "./loginReducer";
import {registrationReducer} from "./registrationReducer";
import {mapReducer} from "./mapReducer";
import {cardReducer} from "./cardReducer";


export const rootReducer = combineReducers({login: logInReducer,registration: registrationReducer, mapRoute: mapReducer, card: cardReducer})