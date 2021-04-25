import React from "react";
import Header from "../components/header/header";
import {Map} from "../components/map/MapApi";
import { Redirect } from 'react-router-dom'
import {useSelector} from "react-redux";

export default () => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)
	return (isLoggedIn?
			<><Header/><Map/></> :
			<Redirect to="/login"/>
	)
}
