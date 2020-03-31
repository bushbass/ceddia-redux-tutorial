import { combineReducers } from "redux";
import products from "./productReducer";
import { reducer } from "./reducer";

export default combineReducers({
  products,
  reducer
});
