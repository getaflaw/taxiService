import {loggedIn, loggedStatus} from "./actions";

const initialState = {
	dataUser: {email: '', password: ''},
	isLoggedIn: false,
	isLoading: false,
	alert: null
};

export const logInReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REQUES_LOGGING':
			return {
				...state,
				isLoggedIn: false,
				dataUser: action.payload,
				isLoading: true
			}
		case 'SUCCESS_LOGGED_IN':
			return {
				...state,
				isLoggedIn: true,
				isLoading: false
			}
		case 'FAILED_LOGGED_IN':
			return {
				...state,
				isLoggedIn: false,
				alert: action.payload,
				isLoading: false
			}
		case 'HIDE_ALERT': {
			return {
				...state,
				alert: null
			}
		}
		case 'LOGOUT':
			return {
				...state,
				isLoggedIn: false,
				dataUser: {email: '',password: ''}
			}
		default:
			return state
	}
}