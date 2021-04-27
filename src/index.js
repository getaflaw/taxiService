import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import './styles/index.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./state/redux/rootReducer";
import thunk from 'redux-thunk'
import {Provider} from "react-redux";
import {loginMiddleWare} from "./state/middleware/logginMiddleware";

const store = createStore(rootReducer, compose(applyMiddleware(loginMiddleWare, thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

const app = (<Provider store={store}><App/></Provider>)

ReactDOM.render(
	app,
	document.getElementById('root')
);