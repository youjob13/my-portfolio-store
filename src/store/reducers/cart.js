const TOGGLE_CART = "TOGGLE_CART";
const ADD_PRODUCT = "ADD_PRODUCT";
const CHANGE_QUANTITY_PRODUCT = "CHANGE_QUANTITY_PRODUCT";
const CHANGE_SIZE_PRODUCT = "CHANGE_SIZE_PRODUCT";
const CHANGE_COLOR_PRODUCT = "CHANGE_COLOR_PRODUCT";
const CHANGE_DELIVERY_PRODUCT = "CHANGE_DELIVERY_PRODUCT";
const TOGGLE_CONSENT = "TOGGLE_CONSENT";
const DELETE_QUANTITY_PRODUCT = "DELETE_QUANTITY_PRODUCT";

let initialState = {
  isCart: false,
  cart: [],
  delivery: 20,
  isConsent: false,
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART: {
      return {
        ...state,
        isCart: !state.isCart,
      };
    }
    case TOGGLE_CONSENT: {
      return {
        ...state,
        isConsent: !state.isConsent,
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
    case DELETE_QUANTITY_PRODUCT: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.orderId !== action.orderId),
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
    case CHANGE_DELIVERY_PRODUCT: {
      return {
        ...state,
        delivery: action.delivery,
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
export const setStatus = () => ({
  type: TOGGLE_CART,
});
export const setConsent = () => ({
  type: TOGGLE_CONSENT,
});
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});
export const changeQuantityProduct = (orderId, quantity) => ({
  type: CHANGE_QUANTITY_PRODUCT,
  orderId,
  quantity,
});
export const deleteQuantityProduct = (orderId) => ({
  type: DELETE_QUANTITY_PRODUCT,
  orderId,
});
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
export const changeDeliveryProduct = (delivery) => ({
  type: CHANGE_DELIVERY_PRODUCT,
  delivery,
});
