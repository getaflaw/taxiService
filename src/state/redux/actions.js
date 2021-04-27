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

export function failedToLogin() {
	return dispatch => {
		dispatch({
			type: 'FAILED_LOGGED_IN',
		})
	}
}


