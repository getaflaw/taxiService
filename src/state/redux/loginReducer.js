import {FAILED_TO_LOGIN, LOGOUT, REQUEST_LOGGED_IN, SUCCESS_TO_LOGIN} from "./types";

const initialState = {
	dataUser: {email: '', password: ''},
	isLoggedIn: false,
	isLoading: false,
	authToken: ''
};

export const logInReducer = (state= initialState, action) => {
	switch (action.type) {
		case REQUEST_LOGGED_IN:
			return {
				...state,
				isLoggedIn: false,
				dataUser: action.payload,
				isLoading: true
			}
		case SUCCESS_TO_LOGIN:
			return {
				...state,
				isLoggedIn: true,
				isLoading: false,
				authToken: action.payload
			}
		case FAILED_TO_LOGIN:
			return {
				...state,
				dataUser: {email: '', password: ''},
				isLoggedIn: false,
				isLoading: false
			}
		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				dataUser: {email: '',password: ''}
			}
		default:
			return state
	}
}