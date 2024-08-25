import { produce } from "immer";
import { FILTERS } from "@/constants";
import { filtersActions } from "./actions.filters";

export const filtersInitialState = {
  currFilter: FILTERS.ALL,
};

function changeFilter(state, action) {
  state.currFilter = action.payload;
}

export default function filterReducer(state = filtersInitialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case filtersActions.CHANGE_FILTER: {
        changeFilter(draft, action);
        break;
      }
    }
  });
}
