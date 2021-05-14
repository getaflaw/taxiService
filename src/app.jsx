import React, {useState} from 'react';
import {LoginModal} from './components/auth/LoginModal'
import LoginPage from './pages/LoginPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {store} from "./state/redux";
import MapPage from './pages/MapPage'
import {Provider} from "react-redux";


function App() {

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/">
						<MapPage/>
					</Route>
					<Route path="/map">
						<MapPage/>
					</Route>
					<Route path="/login" component={LoginPage}/>
					<Route render={() => <h2>page not found</h2>}/>
				</Switch>
			</Router>
		</Provider>
	);
}


export default App;
