import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { saveTweet } from "../features/tweetSlice";

function Tweet() {
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();
  const addTweet = () => {
    console.log(`Adding ${tweet}`);
    dispatch(
      saveTweet({
        item: tweet,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="input">
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <button onClick={addTweet}>Tweet</button>
    </div>
  );
}

export default Tweet;
