import { notifyError } from 'components/toast';
import { push } from 'connected-react-router';
import Cookies from 'js-cookie';

import { ResponseData } from 'models/common';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import authApi from 'redux/api/authApi';
import { authActions } from 'redux/slices/authSlice';
import { RESET_STATE } from 'redux/slices/resetSlice';
import { getSimplifiedError } from 'utils/error';

// handleLogin
function* handleLogin({ payload }: { type: string; payload: any }) {
  try {
    // yield delay(1000); // yield call(api, '')
    const response: ResponseData<any> = yield call(
      authApi.login,
      payload
    );

    if (response.data) {
      const options = { path: '/' };
      Cookies.set('token', response.data.token, options);
      const currentTime = new Date();
      const setTimeExp = currentTime.setTime(
        currentTime.getTime() + 58 * 60 * 1000
      );
      Cookies.set('tokenExp', setTimeExp as any);

      const lastLogin = Cookies.get('lastLogin');
      if (response.data.user.email != lastLogin) {
        yield put({
          type: RESET_STATE,
        });
        Cookies.remove('lastLogin');
        Cookies.remove('redirectPath');
      }
      yield delay(100);
      yield put(authActions.loginSuccess(response.data));
      if (response.data.user.schoolOnboardingStatus === 'unverified') {
        yield put(push('/onboarding'));
      } else {
        const redirectPath = Cookies.get('redirectPath');
        Cookies.remove('lastLogin');

        if (redirectPath) {
          Cookies.remove('redirectPath');
          yield put(push(`/login?redirect=${redirectPath}`));
        } else {
          yield put(push('/'));
        }
      }
    }
  } catch (error: any) {
    const errors = getSimplifiedError(error);
    if (errors === 'This account has not been verified') {
      const currentTime = new Date();
      const setTokenTime = currentTime.setTime(
        currentTime.getTime() + 10 * 60 * 1000
      );
      yield put(
        push({
          pathname: '/verification',
          state: {
            authEmail: `${payload?.phone_number?.countryCode}${payload?.phone_number?.localFormat}`,
            otpTime: setTokenTime,
          },
        })
      );
    }
    notifyError('Login Failed', getSimplifiedError(error));
    yield put(authActions.loginFailed(getSimplifiedError(error))); // Dispatch action
  }
}

function* handleLogout() {
  // try {
  Cookies.remove('token', { path: '/' });
  Cookies.remove('tokenExp', { path: '/' });
  Cookies.remove('otp');
  localStorage.clear();
  // yield put(
  //   onboardingActions.resetBlockOnboarding({ blockType: 'getSchoolProfile' })
  // );
  yield put(push('/login'));
}

export function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin); // Non-blocking
}
