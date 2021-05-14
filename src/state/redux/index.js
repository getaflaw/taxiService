import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import createSageMiddleware from "redux-saga"
import {rootWatcher} from "../saga/sagas";

const sagaMiddleware = createSageMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

sagaMiddleware.run(rootWatcher);