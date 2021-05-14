import React from "react";
import "./Home.css";
import "./Like.css";

import { useState, useEffect } from "react";
import Like from "./Like";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/tweetActions";
import TweetCard from "./TweetCard";
function Home() {
  const user = useSelector((state) => state.userReducer);
  console.log(user);

  const dispatch = useDispatch();
  const axios = require("axios");
  const tweets = useSelector((state) => state.tweetReducer);

  const [arrayDeTweet, setArrayDeTweet] = useState([]);
  const [tweetContent, setTweetContent] = useState("");
  const [homeReload, setHomeReload] = useState(0);
  const updateHomeReload = () => {
    setHomeReload(homeReload + 1);
  };

  const handleSubmit = (e) => {
    console.log(user.userId);
    e.preventDefault();
    fetch("http://localhost:3001/create", {
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

  // useEffect(() => {
  //   const getTweets = async () => {
  //     const response = await axios.get(
  //       "https://backend-twitter-react.vercel.app/tweets",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${user.token}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response.data.arrayDeTweets);
  //     console.log(tweets);
  //     if (response.data) {
  //       dispatch(actions.setTweets(response.data.arrayDeTweets));
  //     }
  //   };
  //   getTweets();
  // }, []);

  useEffect(() => {
    fetch("http://localhost:3001/tweets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setArrayDeTweet(data.arrayDeTweets));
  }, [homeReload]);

  return (
    <div>
      <div id="main_page">
        <div className="main-container">
          <div className="row profile-background">
            <div className="container">
              <div className="avatar-container">
                <div className="avatar">
                  <img src="/img/tubouy.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <nav className="navbar profile-stats">
            <div className="container">
              <div className="row">
                <div className="col"></div>
                <div className="col-6">
                  <ul>
                    <li className="profile-stats-item-active">
                      <a>
                        <span className="profile-stats-item profile-stats-item-label">
                          Tweets
                        </span>

                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="profile-stats-item profile-stats-item-label">
                          Following
                        </span>
                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="profile-stats-item profile-stats-item-label">
                          Followers
                        </span>
                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="profile-stats-item profile-stats-item-label">
                          Likes
                        </span>
                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </nav>

          <div className="container main-content">
            <div className="row">
              <div className="col-lg-4 profile-col">
                <div className="profile-header">
                  <div>
                    <h4 className="mb-4 text-center">Break News</h4>
                    <hr />
                    <h5>The end of bitcoins?</h5>
                    <p>
                      The cryptocurrency has lost its value, reaching a loss of
                      74% according to statistics published on ecoglobal.net
                    </p>
                    <button className="btn btn-secondary mb-3">
                      Read more
                    </button>
                    <hr />
                  </div>
                  <div>
                    <h5>The railway station hosting the Oscars</h5>
                    <p>
                      Union Station in Los Angeles will be one of the venues for
                      this year's Oscars.
                    </p>
                    <button className="btn btn-secondary mb-3">
                      Read more
                    </button>
                    <hr />
                  </div>
                  <div>
                    <h5>Countries send urgent aid to Covid-stricken India</h5>
                    <p>
                      The UK is sending oxygen machines and ventilators while
                      France and the US are also sending supplies.
                    </p>
                    <button className="btn btn-secondary mb-3">
                      Read more
                    </button>
                    <hr />
                  </div>
                </div>
              </div>

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

              <div className="col-lg-3 right-col">
                <div className="content-panel">
                  <div className="panel-header">
                    <h4>Who to follow</h4>
                    <small>
                      {" "}
                      <a href="#">Refresh</a>
                    </small>
                    <small>
                      <a href="#">View all</a>
                    </small>
                  </div>

                  <div className="panel-content">
                    <ol className="tweet-list">
                      <li className="tweet-card">
                        <div className="tweet-content">
                          <img
                            className="tweet-card-avatar"
                            src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg"
                            alt=""
                          />
                          <div className="tweet-header">
                            <span className="fullname">
                              <strong>Jon Vadillo</strong>
                            </span>
                            <span className="username">@JonVadillo</span>
                          </div>

                          <button className="btn btn-follow">Follow</button>
                        </div>
                      </li>
                      <li className="tweet-card">
                        <div className="tweet-content">
                          <img
                            className="tweet-card-avatar"
                            src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg"
                            alt=""
                          />
                          <div className="tweet-header">
                            <span className="fullname">
                              <strong>Jon Vadillo</strong>
                            </span>
                            <span className="username">@JonVadillo</span>
                          </div>

                          <button className="btn btn-follow">Follow</button>
                        </div>
                      </li>
                      <li className="tweet-card">
                        <div className="tweet-content">
                          <img
                            className="tweet-card-avatar"
                            src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg"
                            alt=""
                          />
                          <div className="tweet-header">
                            <span className="fullname">
                              <strong>Jon Vadillo</strong>
                            </span>
                            <span className="username">@JonVadillo</span>
                          </div>

                          <button className="btn btn-follow">Follow</button>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
