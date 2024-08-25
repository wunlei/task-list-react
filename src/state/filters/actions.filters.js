export const filtersActions = {
  CHANGE_FILTER: "filters/changeFilter",
};

export const changeFilter = (filter) => ({
  type: filtersActions.CHANGE_FILTER,
  payload: filter,
});
