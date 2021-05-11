import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from "../features/tweetSlice";

export const store = configureStore({
  reducer: {
    tweets: tweetReducer,
  },
});
