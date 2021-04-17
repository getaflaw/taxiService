import React from 'react';
export const NavItem = (props) => {
	return <button onClick={props.onClick}>{props.page}</button>
}

