import {takeEvery, call, put, select} from "redux-saga/effects"
import {getRequestToServer} from "../../helper/get.request";
import {failureCardData, requestCardData, successCardData} from "../redux/actions";
import {REQUEST_CARD_DATA, SET_CARD_DATA} from "../redux/types";
import {postRequestToServer} from "../../helper/post.request";


function* requestCardWorker() {
	try {
		const authToken = yield select(state => state.login.authToken)
		const cardData = yield call(getRequestToServer, `card?token=${authToken}`)
		if (cardData) {
			yield put(successCardData(cardData))
		} else {
			yield put(failureCardData('Платёжные данные не заполнены'))
		}
	} catch (e) {
		yield put(failureCardData(e))
	}
}

function* setCardDataWorker({payload}) {
	try {

		const authToken = yield select(state => state.login.authToken)
		const cardData = {...payload, token: authToken}
		console.log(cardData)
		const setCardData = yield call(postRequestToServer, cardData, 'card')
		console.log(setCardData)
		if(setCardData.success) {
			yield put(requestCardData())
		}
	} catch (e) {
		console.log(e)

	}
}

export function* cardDataWatcher() {
	yield takeEvery(REQUEST_CARD_DATA, requestCardWorker)
	yield takeEvery(SET_CARD_DATA, setCardDataWorker)
}