import authReducer from './authSlice';
import commonReducer from './commonSlice';
import dateReducer from './dateSlice';

export const rootSlice = {
  auth: authReducer,
  dates: dateReducer,
  common: commonReducer,
};
