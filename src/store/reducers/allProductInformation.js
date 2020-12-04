const TOGGLE_CART = "TOGGLE_CART";

let initialState = {
  category: ["Footwear", "Olympian", "Accessories"],
  size: [4, 5, 6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
  colors: [
    "red",
    "pink",
    "blue",
    "gray",
    "brown",
    "black",
    "yellow",
    "white",
    "green",
    "orange",
  ],
  price: [],
  brands: [
    "Adidas",
    "Nike",
    "Puma",
    "Kappa",
    "Supreme",
    "Tommy Hilfiger",
    "Bershka",
    "New Balance",
    "Raf Simons",
    "Vans",
  ],
};

export const allProductInformation = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {
        ...state,
        isCart: action.status,
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
export const setStatus = (status) => {
  return {
    type: TOGGLE_CART,
    status,
  };
};
