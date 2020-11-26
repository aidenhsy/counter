import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter";

const reducer = {
  counter: counterSlice.reducer,
};

const store = configureStore({ reducer });

export default store;
