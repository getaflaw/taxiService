import React from "react";
import LoginModal from "../components/auth/LoginModal";
import { Redirect } from 'react-router-dom'
import {useSelector} from "react-redux";
import {LayoutAuth} from "../components/auth/authLayout";

export default () => {
	const isLoggedIn = useSelector(state => state.login.isLoggedIn)

	return (isLoggedIn ?
			<Redirect to="/map"/>
			:
			<LayoutAuth>
				<LoginModal/>
			</LayoutAuth>

	)
}