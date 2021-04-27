import React from "react";
import LoginModal from "../components/auth/LoginModal";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {useSelector} from "react-redux";
import {LayoutAuth} from "../components/auth/LayoutAuth";
import MapPage from "./MapPage";
import {RegistrationModal} from "../components/auth/RegistrationModal";

export default ({match}) => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)
	return (isLoggedIn ?
			<Redirect to="/map"/>
			:
			<LayoutAuth>
				<Switch>
					<Route exact path='/login'>
						<LoginModal/>
					</Route>
					<Route path="/login/registration">
						<RegistrationModal/>
					</Route>
				</Switch>
			</LayoutAuth>
	)
}