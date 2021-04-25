import React from "react";
import {Logo} from "../header/svg-logo";

export const LayoutAuth = ({children})=> {
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