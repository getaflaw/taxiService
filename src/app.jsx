import React, {useState} from 'react';
import Header from './modules/header/header';
import {LoginModal} from './modules/auth/LoginModal'
import {Map} from './modules/map/MapApi'
import {AuthProvider, useAuth} from "./modules/auth/AuthProvider";

function App() {
	const [state, setState] = useState({page: 'Profile'})



	const clickHandler = e => {
		e.preventDefault()
		setState({page: e.target.textContent})
	}

	return (
		<AuthProvider>
			<Header onClick={(e) => clickHandler(e)}/>
			<Map>

				{state.page === 'Войти' ? <LoginModal/> : <h2>{state.page}</h2>}
			</Map>
		</AuthProvider>

	);
}

export default App;
