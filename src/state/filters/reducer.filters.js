function changeFilter(state, action) {
  state.currFilter = action.payload;
}

const filtersReducers = {
  changeFilter,
};

export default filtersReducers;
