import React from "react";
import {Logo} from "../generic/svg-logo";
import './LayoutAuth.scss'
import {Route, Switch} from "react-router-dom";
import LoginModal from "./LoginModal";

export const LayoutAuth = ({children, match})=> {

	return (
		<div className="auth-layout">
			<div className='auth-logo'>
				<Logo width='140' height='140'/>
				<h1 className='auth-logo__title'>loft<span>taxi</span></h1>
			</div>
			<div className='auth-modal'>
				{children}
			</div>
		</div>
	)
}