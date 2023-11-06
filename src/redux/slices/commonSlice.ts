import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';

type blockTypes = 'breadcrumbs';
type breadcrumbsBlock = {
  previousPages: string[];
  currentPage: string;
  previousRoute: string;
};
export interface IcommonState {
  breadcrumbs: breadcrumbsBlock;
}

const initialState: IcommonState = {
  breadcrumbs: { previousPages: [], currentPage: '', previousRoute: '' },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    //setBreadcrumbs
    setBreadcrumbs(state, action: PayloadAction<breadcrumbsBlock>) {
      const selectedDateRange = {
        ...action.payload,
        previousPages: action.payload.previousPages,
        currentPage: action.payload.currentPage,
        previousRoute: action.payload.previousRoute,
      };

      state.breadcrumbs = selectedDateRange;
    },

    //reset block and Flags
    resetBlockCommon(state, action: PayloadAction<{ blockType: blockTypes }>) {
      return {
        ...state,
        [action.payload.blockType]: {
          ...initialState[action.payload.blockType],
        },
      };
    },

    resetFlagDate(state) {
      Object.assign(state, initialState);
    },
  },
});

// Actions
export const commonActions = commonSlice.actions;
export const { setBreadcrumbs, resetBlockCommon, resetFlagDate } =
  commonSlice.actions;

// Reducer
const commonReducer = commonSlice.reducer;
export default commonReducer;
