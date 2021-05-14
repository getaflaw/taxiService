import {
	FAILED_TO_LOGIN, FAILURE_ADDRESS_LIST, FAILURE_CARD_DATA, FAILURE_REGISTRATION, FAILURE_ROUTER_WAY,
	LOGOUT, REQUEST_ADDRESS_LIST, REQUEST_CARD_DATA,
	REQUEST_LOGGED_IN,
	REQUEST_REGISTRATION, REQUEST_ROUTER_WAY, SET_CARD_DATA, SUCCESS_ADDRESS_LIST, SUCCESS_CARD_DATA,
	SUCCESS_REGISTRATION, SUCCESS_ROUTER_WAY,
	SUCCESS_TO_LOGIN
} from "./types";

export function logOut() {
	return {
		type: LOGOUT
	}
}
export function loggedIn(userData) {
	return {
		type: REQUEST_LOGGED_IN,
		payload: userData
	}
}
export function successToLogin(authToken) {
	return {
		type: SUCCESS_TO_LOGIN,
		payload: authToken
	}
}

export function failedToLogin() {
	return {
		type: FAILED_TO_LOGIN
	}
}

export function registration(userData) {
	return {
		type: REQUEST_REGISTRATION,
		payload: userData
	}
}

export function successRegistration() {
	return {
		type: SUCCESS_REGISTRATION
	}
}

export function failureRegistration(error) {
	return {
		type: FAILURE_REGISTRATION,
		payload: error
	}
}

export function requestAddressList() {
	return {
		type: REQUEST_ADDRESS_LIST
	}
}

export function successAddressList(AddressArray) {
	return {
		type: SUCCESS_ADDRESS_LIST,
		payload: AddressArray
	}
}

export function failureAddressList(error) {
	return {
		type: FAILURE_ADDRESS_LIST,
		payload: error
	}
}

export function requestRouterWay(routerWay) {
	return {
		type: REQUEST_ROUTER_WAY,
		payload: routerWay
	}
}

export function successRouterWay(mapBoxPath) {
	return {
		type: SUCCESS_ROUTER_WAY,
		payload: mapBoxPath
	}
}

export function failureRouterWay(error) {
	return {
		type: FAILURE_ROUTER_WAY,
		payload: error
	}
}

export function requestCardData() {
	return{
		type: REQUEST_CARD_DATA
	}
}

export function successCardData(cardData) {
	return {
		type: SUCCESS_CARD_DATA,
		payload: cardData
	}
}

export function failureCardData(error) {
	return {
		type: FAILURE_CARD_DATA,
		payload: error
	}
}

export function setCardData(cardData) {
	return {
		type: SET_CARD_DATA,
		payload: cardData
	}
}
