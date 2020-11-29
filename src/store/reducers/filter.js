const SET_FILTER = "SET_FILTER";
const TOGGLE_FILTER_STATUS = "TOGGLE_FILTER_STATUS";

let initialState = {
  filteredArr: [],
  isFiltered: false,
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_STATUS: {
      return {
        ...state,
        isFiltered: !state.isFiltered,
      };
    }
    case SET_FILTER: {
      return {
        ...state,
        filteredArr: [...action.filteredGoods],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export const setFilterStatus = () => ({
  type: TOGGLE_FILTER_STATUS,
});
export const setFilter = (filteredGoods) => ({
  type: SET_FILTER,
  filteredGoods,
});
