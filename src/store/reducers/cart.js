const TOGGLE_CART = "TOGGLE_CART";
const ADD_PRODUCT = "ADD_PRODUCT";
const CHANGE_QUANTITY_PRODUCT = "CHANGE_QUANTITY_PRODUCT";
const CHANGE_SIZE_PRODUCT = "CHANGE_SIZE_PRODUCT";
const CHANGE_COLOR_PRODUCT = "CHANGE_COLOR_PRODUCT";

let initialState = {
  isCart: false,
  cart: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {
        ...state,
        isCart: action.status,
      };
    }
    case ADD_PRODUCT: {
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    }
    case CHANGE_QUANTITY_PRODUCT: {
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.orderId === action.orderId) {
            item.quantity = action.quantity;
            return item;
          }
          return item;
        }),
      };
    }
    case CHANGE_SIZE_PRODUCT: {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          if (item.orderId === action.orderId) {
            item.currentSize = action.size;
            return item;
          }
          return item;
        }),
      };
    }
    case CHANGE_COLOR_PRODUCT: {
      console.log(state.cart[0].currentColor);
      return {
        ...state,
        cart: state.cart.filter((item) => {
          if (item.orderId === action.orderId) {
            item.currentColor = action.color;
            return item;
          }
          return item;
        }),
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
export const getStatus = (status) => {
  return {
    type: TOGGLE_CART,
    status,
  };
};
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product,
  };
};
export const changeQuantityProduct = (orderId, quantity) => {
  return {
    type: CHANGE_QUANTITY_PRODUCT,
    orderId,
    quantity,
  };
};
export const changeSizeProduct = (orderId, size) => ({
  type: CHANGE_SIZE_PRODUCT,
  orderId,
  size,
});
export const changeColorProduct = (orderId, color) => ({
  type: CHANGE_COLOR_PRODUCT,
  orderId,
  color,
});
