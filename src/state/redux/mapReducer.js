import {
	FAILURE_ADDRESS_LIST, FAILURE_ROUTER_WAY,
	REQUEST_ADDRESS_LIST,
	REQUEST_ROUTER_WAY,
	SUCCESS_ADDRESS_LIST,
	SUCCESS_ROUTER_WAY
} from "./types";

const initialState = {addressList: [], isLoading: false, errorMessage: null, routerWay:[], mapBoxPath: []}

export const mapReducer = (state=initialState, action) => {
	switch (action.type) {
		case REQUEST_ADDRESS_LIST:
			return {
				...state,
				isLoading: true
			}
		case SUCCESS_ADDRESS_LIST:
			return {
				...state,
				addressList: action.payload,
				isLoading: false
			}
		case FAILURE_ADDRESS_LIST:
			return {
				...state,
				errorMessage: action.payload
			}
		case REQUEST_ROUTER_WAY:
			return {
				...state,
				isLoading: true,
				routerWay: action.payload
			}
		case SUCCESS_ROUTER_WAY:
			return {
				...state,
				isLoading: false,
				mapBoxPath: action.payload
			}
		case FAILURE_ROUTER_WAY:
			return {
				...state,
				errorMessage: action.payload,
				isLoading: false
			}
		default: return state
	}
}