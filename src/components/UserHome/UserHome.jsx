import React from "react";
import "../Home.css";
import "../Like.css";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserTweets from "./UserTweets";
import LeftPanel from "./LeftPanel";

function Home() {
  const user = useSelector((state) => state.userReducer);
  const [arrayDeTweet, setArrayDeTweet] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("https://backend-twitter-react.vercel.app/userTweets", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArrayDeTweet(data);
      });
  }, [user.token]);

  useEffect(() => {
    fetch("https://backend-twitter-react.vercel.app/userInfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [user.token]);
  return (
    <div>
      <div id="main_page">
        <div className="main-container">
          <div className="row profile-background">
            <div className="container">
              <div className="avatar-container">
                <div className="avatar">
                  <img src={userInfo.image} alt={userInfo.firstName} />
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
                      <a href="/">
                        <span className="profile-stats-item profile-stats-item-label">
                          Tweets
                        </span>

                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="profile-stats-item profile-stats-item-label">
                          Following
                        </span>
                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="profile-stats-item profile-stats-item-label">
                          Followers
                        </span>
                        <span className="profile-stats-item profile-stats-item-number"></span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
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
                <LeftPanel />
              </div>

              <div className="col-lg-5">
                <ol className="tweet-list">
                  {arrayDeTweet &&
                    arrayDeTweet.map((item) => {
                      return <UserTweets item={item} />;
                    })}
                </ol>
              </div>

              <div className="col-lg-3 right-col">
                <div className="content-panel">
                  <div className="panel-header">
                    <h4>Who to follow</h4>
                    <small>
                      {" "}
                      <a href="/">Refresh</a>
                    </small>
                    <small>
                      <a href="/">View all</a>
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
