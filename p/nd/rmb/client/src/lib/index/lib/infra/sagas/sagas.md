


-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------



-------------------------------------------------------------------

/* eslint-disable no-constant-condition, no-undef, no-console, no-unused-vars 

https://github.com/redux-saga/redux-saga/tree/master/examples/error-demo

*/

import { retry, call, put, takeEvery, delay, all, race, fork, spawn, take, select } from 'redux-saga/effects'
import { errorGeneratorSelector } from '../reducers/'

export function* errorInPutSaga() {
  yield delay(100)
  yield put({ type: 'REDUCER_ACTION_ERROR_IN_PUT' })
}

export function* errorInSelectSaga() {
  yield delay(100)
  yield select(errorGeneratorSelector)
}

function* throwAnErrorSaga() {
  yield delay(100)
  undefinedIsNotAFunction()
}

export function errorInCallSyncSaga() {
  undefinedIsNotAFunction()
}

export function* errorInCallAsyncSaga() {
  yield delay(100)
  yield call(throwAnErrorSaga)
}

export function* errorInCallInlineSaga() {
  yield call(function*() {
    undefinedIsNotAFunction()
    yield 2
  })
}

export function* errorInForkSaga() {
  yield delay(100)
  yield fork(throwAnErrorSaga)
}

function* errorInSpawnSaga() {
  yield delay(100)
  yield spawn(throwAnErrorSaga)
}

export function* errorInRaceSaga() {
  yield delay(100)
  yield race({
    err: call(throwAnErrorSaga),
    ok: delay(100),
  })
}

function* caughtErrorSaga() {
  try {
    yield delay(100)
    yield call(throwAnErrorSaga)
  } catch (e) {
    console.error('error was caught', e)
  }
}

function* delegatedSaga() {
  yield delay(100)
  yield call(throwAnErrorSaga)
}

export function* errorInDelegateSaga() {
  yield* delegatedSaga()
}

export function* errorInRetrySaga() {
  yield retry(3, 10, function() {
    undefinedIsNotAFunction()
  })
}

export const funcExpressionSaga = function* functionExpressionSaga() {
  yield call(throwAnErrorSaga)
}

export function* primitiveErrorSaga() {
  yield delay(10)
  throw 'error reason'
}

export default function* rootSaga() {
  yield all([
    takeEvery('ACTION_ERROR_IN_PUT', errorInPutSaga),
    takeEvery('ACTION_ERROR_IN_SELECT', errorInSelectSaga),
    takeEvery('ACTION_ERROR_IN_CALL_SYNC', errorInCallSyncSaga),
    takeEvery('ACTION_ERROR_IN_CALL_ASYNC', errorInCallAsyncSaga),
    takeEvery('ACTION_ERROR_IN_CALL_INLINE', errorInCallInlineSaga),
    takeEvery('ACTION_ERROR_IN_FORK', errorInForkSaga),
    takeEvery('ACTION_ERROR_IN_SPAWN', errorInSpawnSaga),
    takeEvery('ACTION_ERROR_IN_RACE', errorInRaceSaga),
    takeEvery('ACTION_CAUGHT_ERROR', caughtErrorSaga),
    fork(function* inlinedSagaName() {
      while (true) {
        yield take('ACTION_INLINE_SAGA_ERROR')
        yield call(throwAnErrorSaga)
      }
    }),
    takeEvery('ACTION_IN_DELEGATE_ERROR', errorInDelegateSaga),
    takeEvery('ACTION_FUNCTION_EXPRESSION_ERROR', funcExpressionSaga),
    takeEvery('ACTION_ERROR_IN_RETRY', errorInRetrySaga),
    takeEvery('ACTION_ERROR_PRIMITIVE', primitiveErrorSaga),
  ])
}

-------------------------------------------------------------------
import { take, put, call, fork, race, cancelled, select } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import fetch from 'isomorphic-fetch'
import { selectedRedditSelector, postsByRedditSelector } from '../reducers/selectors'
import { INCREMENT_FETCH, CANCEL_INCREMENT_FETCH, 
  INCREMENT_ASYNC, INCREMENT, CANCEL_INCREMENT_ASYNC, COUNTDOWN_TERMINATED, 
  requestPosts, receivePosts, INVALIDATE_REDDIT, SELECT_REDDIT } from '../actions'
const action = type => ({ type })
export const countdown = secs => {
  console.log('countdown', secs)
  return eventChannel(listener => {
    const iv = setInterval(() => {
      secs -= 1
      console.log('countdown', secs)
      if (secs > 0) listener(secs)
      else {
        listener(END)
        clearInterval(iv)
        console.log('countdown terminated')
      }
    }, 1000)
    return () => {
      clearInterval(iv)
      console.log('countdown cancelled')
    }
  })
}
export function* incrementAsync({ value }) {
  const chan = yield call(countdown, value)
  try {
    while (true) {
      let seconds = yield take(chan)
      yield put({ type: INCREMENT_ASYNC, value: seconds })
    }
  } finally {
    if (!(yield cancelled())) {
      yield put(action(INCREMENT))
      yield put(action(COUNTDOWN_TERMINATED))
    }
    chan.close()
  }
}
export function* watchIncrementAsync() {
  try {
    while (true) {
      const action = yield take(INCREMENT_ASYNC)
      // starts a 'Race' between an async increment and a user cancel action
      // if user cancel action wins, the incrementAsync will be cancelled automatically
      yield race([call(incrementAsync, action), take(CANCEL_INCREMENT_ASYNC)])
    }
  } finally {
    console.log('watchIncrementAsync terminated')
  }
}
export function cancelFetchPostsApi(reddit) {
  return eventChannel(listener => {
    try{
      setTimeout(function(){
        fetch(`../${reddit}.json`)
        .then(response => response.json())
        .then(json => {
          listener(json)
        })
      }, 2000)
    } catch(e) {
      listener(END)
    }
    return () => {
      console.log('Event channel for cancelFetchPostsApi started')
    }
  })
}
export function* cancelFetchPosts(reddit) {
  const chan = yield call(cancelFetchPostsApi, reddit)
  try {
    var posts = yield take(chan);
  } finally {
    if (!(yield cancelled())) {
      yield put(receivePosts(reddit, posts))
    }
    chan.close()
  }
}
export function fetchPostsApi(reddit) {
  return fetch(`../${reddit}.json`)
    .then(response => response.json())
}
export function* fetchPosts(reddit) {
  yield put(requestPosts(reddit))
  const posts = yield call(fetchPostsApi, reddit)
  yield put(receivePosts(reddit, posts))
}
export function* invalidateReddit() {
  while (true) {
    const { reddit } = yield take(INVALIDATE_REDDIT)
    yield call(fetchPosts, reddit)
  }
}
export function* nextRedditChange() {
  while (true) {
    const prevReddit = yield select(selectedRedditSelector)
    yield take(SELECT_REDDIT)

    const newReddit = yield select(selectedRedditSelector)
    const postsByReddit = yield select(postsByRedditSelector)
    if (prevReddit !== newReddit && !postsByReddit[newReddit]) yield fork(fetchPosts, newReddit)
  }
}
export function* startup() {
  try {
    while (true) {
      yield take(INCREMENT_FETCH)
      const selectedReddit = yield select(selectedRedditSelector)
      yield race([call(cancelFetchPosts, selectedReddit), take(CANCEL_INCREMENT_FETCH)])
    }
  } finally {
    console.log('startup terminated')
  }
}
export default function* rootSaga() {
  yield fork(watchIncrementAsync)
  yield fork(startup)
  yield fork(nextRedditChange)
  yield fork(invalidateReddit)
}