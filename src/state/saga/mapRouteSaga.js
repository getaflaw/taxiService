import {takeEvery, call, put} from "redux-saga/effects"
import {getRequestToServer} from "../../helper/get.request";
import {REQUEST_ADDRESS_LIST, REQUEST_ROUTER_WAY} from "../redux/types";
import {failureAddressList, failureRouterWay, successAddressList, successRouterWay} from "../redux/actions";

function* addressListWorker() {
	const AddressList = yield call(getRequestToServer, 'addressList')
	if (AddressList) {
		yield put(successAddressList(AddressList.addresses))
	} else {
		yield put(failureAddressList('Сервер не отвечает, попробуйте позже'))
	}
}

function* routerWayWorker({payload: [address1,address2]}) {
	const routerWay = yield call(getRequestToServer, `route?address1=${address1}&address2=${address2}`)
	if (routerWay) {
		yield put(successRouterWay(routerWay))
	} else {
		yield put(failureRouterWay('Сервер не доступен'))
	}
}

export function* addressListWatcher() {
	yield takeEvery(REQUEST_ADDRESS_LIST, addressListWorker)
	yield takeEvery(REQUEST_ROUTER_WAY, routerWayWorker)
}