import React from 'react';
import {useDispatch} from 'react-redux'
import {Logo} from '../generic/svg-logo'
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";
import {logOut} from "../../state/redux/actions";
import './header.scss'

function Header(props) {
	const dispatch = useDispatch()
	const clickHandler = (e) => {
		e.preventDefault()
		dispatch(logOut())
	}

	return (
			<header className='map-header'>
				<div className='map-header__logo'>
					<Logo width={'61'} height={61}/>
					<h1 className='header-logo__title'>loft<span>taxi</span></h1>
				</div>
				<nav className='header-nav'>
					<Link to='/map' className='header-nav__item'>Карта</Link>
					<Link to='/map/profile' className='header-nav__item'>Профиль</Link>
					<a className='header-nav__item' onClick={clickHandler}>Выйти</a>
				</nav>
			</header>
	)
}

export default Header