import React from "react";
import Header from "../modules/header/header";
import {Map} from "../modules/map/MapApi";
import { Redirect } from 'react-router-dom'
import {useSelector} from "react-redux";

export default () => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)
	return (isLoggedIn?
			<><Header/><Map/></> :
			<Redirect to="/login"/>
	)
}
