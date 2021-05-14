import React from "react";
import Header from "../components/header/header";
import {Map} from "../components/map/MapApi";
import {Redirect, Route, Switch} from 'react-router-dom'
import {useSelector} from "react-redux";
import {ProfileDetail} from "../components/profile/ProfileDetail";

import {RouteMapContent} from "../components/map/RouteMapContent";

export default () => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)

	return (isLoggedIn ?
			<>
				<Header/>
				<Map>
					<Switch>
						<Route exact path={`/map`}>
							<RouteMapContent/>
						</Route>
						<Route path={`/map/profile`}>
							<ProfileDetail/>
						</Route>
					</Switch>
				</Map>
			</> :
			<Redirect to="/login"/>
	)
}
