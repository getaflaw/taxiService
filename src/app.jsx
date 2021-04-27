import React, {useState} from 'react';
import {LoginModal} from './components/auth/LoginModal'
import LoginPage from './pages/LoginPage'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import MapPage from './pages/MapPage'



function App() {

	return (
			<Router>
				<Switch>
					<Route
						path="/map"
						component={MapPage}
					/>
					<Route path="/profile" render={() => <p>Public</p>}>
					</Route>
					<Route path="/login" component={LoginPage}/>
					<Redirect to="/login"/>
				</Switch>
			</Router>
	);
}


export default App;
