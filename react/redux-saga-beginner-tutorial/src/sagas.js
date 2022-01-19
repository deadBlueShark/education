import { put, takeEvery, call, all } from 'redux-saga/effects'

import * as ACTION from './actions'

// create a delay function that returns a Promise that will resolve after a
// specified number of milliseconds. We'll use this function to block the Generator.
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log("Hello saga")
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  // yield delay(1000)
  yield call(delay, 1000)
  yield put({ type: ACTION.INCREMENT })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(ACTION.INCREMENT_ASYNC, incrementAsync)
}

export function* decrementAsync() {
  yield call(delay, 1000)
  yield put({ type: ACTION.DECREMENT })
}

export function* watchDecrementAsync() {
  yield takeEvery(ACTION.DECREMENT_ASYNC, decrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync(),
  ])
}
