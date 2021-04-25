import {showAlert} from '../redux/actions'
const requestAuthToServer = async (store, action)=> {
	const userData = {email: action.payload.email, password: action.payload.password}
	const response = await fetch('https://loft-taxi.glitch.me/auth',
		{
			method:'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(userData) })
	const json = await response.json()
	console.log(json)
	if (json.success===true) {
		return store.dispatch({type: 'SUCCESS_LOGGED_IN'})
	}
	else {
		return store.dispatch(showAlert('Авторизация не удалась, попробуйте снова'))
	}
}

export const loginMiddleWare = store => next => action => {
	if(action.type==='REQUES_LOGGING') {
		requestAuthToServer(store,action)
	}
	return next(action)
}