import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addDays } from 'date-fns';

type blockTypes = 'selectedDateRange';
type dateBlock = {
  range: {
    startDate: any;
    endDate: any;
    key: string;
  }[];

  value: string;
};
export interface IdateState {
  selectedDateRange: dateBlock;
}

const block = {
  range: [
    {
      startDate: addDays(new Date(), -7).toISOString(),
      endDate: new Date().toISOString(),
      key: 'selection',
    },
  ],
  value: 'Last 7 days',
};
const initialState: IdateState = {
  selectedDateRange: { ...block },
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    //setSelectedRange
    setSelectedRange(state, action: PayloadAction<any>) {
      const selectedDateRange = {
        ...action.payload,
        range: action.payload.range.map((range: any) => ({
          ...range,
          startDate: new Date(range.startDate).toISOString(),
          endDate: new Date(range.endDate).toISOString(),
        })),
      };

      state.selectedDateRange = selectedDateRange;
    },

    //reset block and Flags
    resetBlockDate(state, action: PayloadAction<{ blockType: blockTypes }>) {
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
export const dateActions = dateSlice.actions;
export const { setSelectedRange, resetBlockDate, resetFlagDate } =
  dateSlice.actions;

// Reducer
const dateReducer = dateSlice.reducer;
export default dateReducer;
