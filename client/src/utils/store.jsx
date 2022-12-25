import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import rentalReducer from "./rentalSlice";

const reducers = combineReducers({
  counter: counterReducer,
  rental: rentalReducer,
});
const store = configureStore({
  reducer: reducers,
});

export default store;
