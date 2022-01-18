import { put, takeEvery, all } from 'redux-saga/effects'

// create a delay function that returns a Promise that will resolve after a
// specified number of milliseconds. We'll use this function to block the Generator.
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log("Hello saga")
}

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
