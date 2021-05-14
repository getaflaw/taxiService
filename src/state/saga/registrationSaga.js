import {takeEvery, call, select, put} from "redux-saga/effects"
import {postRequestToServer} from "../../helper/post.request";
import {failureRegistration, successRegistration} from "../redux/actions";
import {REQUEST_REGISTRATION} from "../redux/types";

function* registrationWorker() {
	try {
		const userData = yield select(state => state.registration.registrationData)
		const response = yield call(postRequestToServer, userData, 'register')
		console.log(userData)
		console.log(response.success)
		if (response.success === true) {
			yield put(successRegistration())
		} else {
			yield put(failureRegistration('Такой пользователь уже существует'))
		}
	} catch (error) {
		yield put(failureRegistration(error))
	}

}

export function* registrationWatcher() {
	yield takeEvery(REQUEST_REGISTRATION, registrationWorker)
}