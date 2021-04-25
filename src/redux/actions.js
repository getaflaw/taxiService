export function logOut() {
	return {
		type: 'LOGOUT'
	}
}
export function loggedIn(dataUser) {
	return {
		type: 'REQUES_LOGGING',
		payload: dataUser
	}
}

export function showAlert(text) {
	return dispatch => {
		dispatch({
			type: 'FAILED_LOGGED_IN',
			payload: text
		})

		setTimeout(() => {
			dispatch({type:'HIDE_ALERT'})
		}, 3000)
	}
}


