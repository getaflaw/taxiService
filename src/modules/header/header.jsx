import React from 'react';
import {Logo} from './svg-logo'
import {useAuth} from "../auth/AuthProvider";

function Header(props) {
	const {isLoggedIn} = useAuth()
	return (
		<header className='map-header'>
			<div className='map-header__logo'>
				<Logo width={'61'} height={61}/>
				<h1 className='header-logo__title'>loft<span>taxi</span></h1>
			</div>
			<nav className='header-nav'>
				<a className='header-nav__item' onClick={props.onClick}>Профиль</a>
				<a className='header-nav__item' onClick={props.onClick}>Карта</a>
				<a className='header-nav__item' onClick={props.onClick}>{isLoggedIn? 'Выйти' : 'Войти'}</a>
			</nav>
		</header>
	)
}

export default Header