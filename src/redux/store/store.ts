import { configureStore } from "@reduxjs/toolkit";
import useReducer from "redux/actions/user";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});
