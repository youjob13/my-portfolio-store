import { goodsAPI } from "../../api/api";

const SET_GOODS = "SET_GOODS";

let initialState = {
  goods: [],
};

export const goods = (state = initialState, action) => {
  switch (action.type) {
    case SET_GOODS: {
      return {
        ...state,
        goods: action.goods,
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
const setGoods = (goods) => {
  return {
    type: SET_GOODS,
    goods,
  };
};
//thunk creator
export const getGoods = () => async (dispatch) => {
  const db = await goodsAPI.getGoods();
  if (db && db.exists) {
    dispatch(setGoods(db.data().goods));
  }
};
