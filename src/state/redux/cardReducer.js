import {FAILURE_CARD_DATA, REQUEST_CARD_DATA, SET_CARD_DATA, SUCCESS_CARD_DATA} from "./types";

const initialState = {dataCard: {}, isLoading: false, errorMsg: ''}

export const cardReducer = (state=initialState, action) => {
	switch (action.type) {
		case REQUEST_CARD_DATA:
			return {
				...state,
				isLoading: true
			}
		case SUCCESS_CARD_DATA:
			return {
				...state,
				dataCard: action.payload,
				isLoading: false
			}
		case FAILURE_CARD_DATA:
			return {
				...state,
				isLoading: false,
				errorMsg: action.payload
			}
		case SET_CARD_DATA:
			return {
				...state,
				isLoading: true
			}
		default:
			return state
	}
}