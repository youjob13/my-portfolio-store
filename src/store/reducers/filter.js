const SET_FILTER = "SET_FILTER";

let initialState = {
  filteredArr: [],
};

export const filter = (state = initialState, action) => {
  switch (action.type) {
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

export const setFilter = (filteredGoods) => ({
  type: SET_FILTER,
  filteredGoods,
});
