import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./reducers/userSlice";
import classReducer from "./reducers/classSlice";
import statsReducer from "./reducers/statsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    class: classReducer,
    stats: statsReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
