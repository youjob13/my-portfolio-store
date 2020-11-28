const FIND_PRODUCT = "FIND_PRODUCT";

let initialState = {
  searchField: "",
};

export const searchProduct = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT: {
      return {
        ...state,
        searchField: action.searchField,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

//action creator
export const findProduct = (searchField) => {
  return {
    type: FIND_PRODUCT,
    searchField,
  };
};

