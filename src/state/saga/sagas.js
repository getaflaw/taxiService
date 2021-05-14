import {all} from "redux-saga/effects"
import {authorizationWatcher} from "./authorizationSaga";
import {registrationWatcher} from "./registrationSaga";
import {addressListWatcher} from "./mapRouteSaga";
import {cardDataWatcher} from "./cardDataSaga";

export function* rootWatcher() {
	yield all([authorizationWatcher(),registrationWatcher(), addressListWatcher(), cardDataWatcher()])
}
