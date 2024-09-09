import { all, takeEvery, take, put, call, fork } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { receiveAllSearchKeys, backFilterSearchKeys, BACK_FILTER_SEARCH_KEYS, GET_ALL_SEARCH_KEYS, RE_FILTER_SEARCH_KEYS  } from '../actions'

export function fetchAllSearchKeys() {
  return C_SM().A_VPP.getIDBTblDt('searchKeys').then(response => {
    return response;
  })
}
export function* reFilterAllSearchKeys(action) {
  const searchKeys = yield call(fetchAllSearchKeys)
  yield put(backFilterSearchKeys(searchKeys, action.payload))
}
export function* getAllSearchKeys() {
  const searchKeys = yield call(fetchAllSearchKeys)
  yield put(receiveAllSearchKeys(searchKeys))
}
export default function* rootSaga() {
  yield all([
    fork(getAllSearchKeys), 
    takeEvery(GET_ALL_SEARCH_KEYS, getAllSearchKeys),
    takeEvery(RE_FILTER_SEARCH_KEYS, reFilterAllSearchKeys)
  ])
  // yield put({type: 'GET_ALL_SEARCH_KEYS', payload: ''})
}