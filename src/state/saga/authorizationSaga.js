import {takeEvery, call, select, put} from "redux-saga/effects"
import {failedToLogin, successToLogin} from "../redux/actions";
import {REQUEST_LOGGED_IN} from "../redux/types";
import {postRequestToServer} from "../../helper/post.request";



function* authorizationWorker() {
	const userData = yield select(state => state.login.dataUser)
	const response = yield call(postRequestToServer, userData, 'auth')
	if (response.success === true) {
		console.log(response)
		yield put(successToLogin(response.token))
	} else {
		yield put(failedToLogin())
	}

}

export function* authorizationWatcher() {
	yield takeEvery(REQUEST_LOGGED_IN, authorizationWorker);
}