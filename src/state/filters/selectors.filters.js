export const selectSlice = (state) => state.filters;

export const selectCurrFilter = (state) => selectSlice(state).currFilter;
