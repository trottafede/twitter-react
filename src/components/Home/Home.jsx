import React from "react";
import "../Home.css";
import "../Like.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TweetCard from "./TweetCard";
import WhoToFollow from "../WhoToFollow/WhoToFollow";
import News from "./News";

function Home() {
  const user = useSelector((state) => state.userReducer);

  const [arrayDeTweet, setArrayDeTweet] = useState([]);
  const [tweetContent, setTweetContent] = useState("");
  const [homeReload, setHomeReload] = useState(0);
  const updateHomeReload = () => {
    setHomeReload(homeReload + 1);
  };

  const handleSubmit = (e) => {
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

  useEffect(() => {
    fetch("https://backend-twitter-react.vercel.app/tweets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayDeTweet(data.arrayDeTweets);
      });
  }, [homeReload, user.token]);

  return (
    <div>
      <div id="main_page">
        <div className="container main-content">
          <div className="row">
            <News />

            <div className="col-lg-5">
              <ol className="tweet-list">
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

                {arrayDeTweet &&
                  arrayDeTweet.map((item) => {
                    return (
                      <TweetCard
                        item={item}
                        updateHomeReload={updateHomeReload}
                      />
                    );
                  })}
              </ol>
            </div>
            <WhoToFollow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
