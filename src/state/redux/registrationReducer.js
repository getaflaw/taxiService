import {FAILURE_REGISTRATION, HIDE_ERROR, REQUEST_REGISTRATION, SUCCESS_REGISTRATION} from "./types";

const initialState = {
	registrationData: {},
	isLoading: false,
	isSuccess: false,
	errorMsg: null
}

export const registrationReducer = (state= initialState,action) => {
	switch (action.type) {
		case REQUEST_REGISTRATION:
			return {
				...state,
				registrationData: action.payload,
				isLoading: true
			}
		case SUCCESS_REGISTRATION:
			return {
				...state,
				isLoading: false,
				isSuccess: true
			}
		case FAILURE_REGISTRATION:
			return {
				...state,
				registrationData: {},
				isLoading: false,
				errorMsg: action.payload
			}
		case HIDE_ERROR:
			return {
				...state,
				errorMsg: null
			}
		default:
			return state
	}
}