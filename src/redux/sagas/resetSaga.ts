import { takeLatest } from 'redux-saga/effects';
import { RESET_STATE } from 'redux/slices/resetSlice';

function* handleResetState() {
  // yield put(resetFlagBank());
 
}

export function* resetStateSaga() {
  yield takeLatest(RESET_STATE, handleResetState);
}
