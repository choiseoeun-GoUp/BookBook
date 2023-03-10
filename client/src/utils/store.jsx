import { configureStore, combineReducers } from "@reduxjs/toolkit";

//새로고침 유지
import storage from "redux-persist/lib/storage";
// 쿼리파라미터 알아보자
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import rentalReducer from "./rentalSlice";
import pageReducer from "./pageSlice";

const reducers = combineReducers({
  rental: rentalReducer,
  page: pageReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
