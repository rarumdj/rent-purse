import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { getPersistConfig } from 'redux-deep-persist';
import {
  Persistor,
  persistReducer
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { history } from 'utils';
import rootSaga from './sagas/rootSaga';
import { rootSlice } from './slices/rootSlice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  ...rootSlice,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = getPersistConfig({
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth.getUser', 'onboarding.getSchoolProfile'],
  rootReducer,
  // stateReconciler: autoMergeLevel2,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export const persistor: Persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
