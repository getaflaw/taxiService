import React from "react";
import './RouteMapLayout.scss'

export const RouteMapLayout = ({children, className})=> {
	return (
		<div className={className}>
			{children}
		</div>
	)
}