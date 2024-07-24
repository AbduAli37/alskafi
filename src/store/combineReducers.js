import {combineReducers} from "@reduxjs/toolkit";
import languageReduces from "./languageReduces";
import cartReducer from "./cartReducer";
export const rootReducers = combineReducers({
  language: languageReduces,
  cart: cartReducer,
});
