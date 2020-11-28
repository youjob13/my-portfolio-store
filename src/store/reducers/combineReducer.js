import { combineReducers } from "redux";
import { goods } from "./goods";
import { cart } from "./cart";
import { filter } from "./filter";
import { allProductInformation } from "./allProductInformation";
import { searchProduct } from "./searchProduct";

export const reducers = combineReducers({
  goods,
  cart,
  filter,
  allProductInformation,
  searchProduct,
});
