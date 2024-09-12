import { FILTERS } from "@/constants";
import filtersReducers from "@/state/filters/reducer.filters";
import { createSlice } from "@reduxjs/toolkit";

export const filtersInitialState = {
  currFilter: FILTERS.ALL,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: filtersReducers,
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
