import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweetList: [],
};

const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    saveTweet: (state, action) => {
      state.tweetList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.tweetList.map((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    },
  },
});

export const { saveTweet, setCheck } = tweetSlice.actions;
export const selectTodoList = (state) => state.todos.tweetList;
export default tweetSlice.reducer;
