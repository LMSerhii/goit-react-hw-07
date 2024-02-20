import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: { name: '' },
  reducers: {
    filterContacts: (state, action) => {
      console.log(state.name);
      state.name = action.payload;
    },
  },
});

export const { filterContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const getQuery = state => state.filters.name;
