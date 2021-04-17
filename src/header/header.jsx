import React from 'react';
import {NavItem} from './nav'

function Header(props) {
	return (<nav>
			<NavItem onClick={props.onClick} page='Profile'/>
			<NavItem onClick={props.onClick} page='Map'/>
			<NavItem onClick={props.onClick} page='SignUp'/>
		</nav>
	)
}

export default Header