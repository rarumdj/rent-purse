import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { block, blockType } from 'models/common';
import { RootState } from 'redux/store';

type blockTypes = 'updateUser' | 'verification' | 'resetPassword';

export interface AuthState {
  login: blockType;
}

const initialState: AuthState = {
  login: { ...block },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //Login
    login(state, action: PayloadAction<any>) {
      state.login.loading = !!action.type;
    },
    loginSuccess(state, action: PayloadAction<any>) {
      // state.isLoggedIn = true;
      state.login.loading = false;
      state.login.success = true;
      state.login.data = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.login.loading = false;
      state.login.error = action.payload;
    },

    //Logout

    //reset block and Flags
    // resetBlockAuth(state, action: PayloadAction<{ blockType: blockTypes }>) {
    //   return {
    //     ...state,
    //     [action.payload.blockType]: {
    //       ...initialState[action.payload.blockType],
    //     },
    //   };
    // },
  },
});

// Actions
export const authActions = authSlice.actions;
// export const { resetBlockAuth } = authSlice.actions;

// Selectors
export const authState = (state: RootState) => state.auth;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
