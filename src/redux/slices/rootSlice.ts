import authReducer from './authSlice';
import dateReducer from './dateSlice';

export const rootSlice = {
  auth: authReducer,
  dates: dateReducer,
};
