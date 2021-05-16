import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function CreateComment() {
  const [tweetContent, setTweetContent] = useState("");
  const [homeReload, setHomeReload] = useState(0);

  const user = useSelector((state) => state.userReducer);
  const updateHomeReload = () => {
    setHomeReload(homeReload + 1);
  };

  const handleSubmit = (e) => {
    console.log(user.userId);
    e.preventDefault();
    fetch("https://backend-twitter-react.vercel.app/create", {
      method: "POST",
      body: JSON.stringify({
        text: tweetContent,
        user: user.userId,
      }),
      headers: {
        Authorization: `Bearer ${user.token}`,

        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTweetContent("");
        updateHomeReload();
      });
  };

  return (
    <li className="tweet-card">
      <div className="tweetForm">
        <form onSubmit={handleSubmit}>
          <label for="text">Que estoy pensando?</label>
          <input
            type="text"
            name="tweetContent"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            id="text"
            className="form-control mb-3"
          />
          <button type="submit" className="btn btn-search-bar">
            Send tweet
          </button>
        </form>
      </div>
    </li>
  );
}

export default CreateComment;
