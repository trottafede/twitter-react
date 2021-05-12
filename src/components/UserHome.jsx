import React from "react";
import "./UserHome.css";
import { useState, useEffect } from "react";

function Home() {
  const [arrayDeTweet, setArrayDeTweet] = useState([]);
  useEffect(() => {
    fetch("https://twitter-q583ain0r-trottafede.vercel.app/")
      .then((response) => response.json())
      .then((data) => setArrayDeTweet(data.arrayDeTweet));
  }, []);

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
                  {arrayDeTweet &&
                    arrayDeTweet.map((item) => {
                      return (
                        <li class="tweet-card">
                          <div class="tweet-content">
                            <div class="tweet-header">
                              <span class="fullname">
                                <strong>
                                  {item.firstName} {item.lastName}
                                </strong>
                              </span>
                              <span class="username">@{item.userName}</span>
                              <span class="tweet-time">
                                {new Date(item.tweetDate).toDateString()}
                              </span>
                            </div>
                            <a>
                              <img
                                class="tweet-card-avatar"
                                src={item.image}
                                alt="profile pic"
                              />
                            </a>
                            <div class="tweet-text">
                              <p class="" lang="es" data-aria-label-part="0">
                                {item.tweet}
                              </p>
                            </div>
                            <div class="tweet-footer">
                              <a class="tweet-footer-btn">
                                <i
                                  class="octicon octicon-comment"
                                  aria-hidden="true"
                                ></i>
                                <span> 18</span>
                              </a>
                              <a class="tweet-footer-btn">
                                <i
                                  class="octicon octicon-sync"
                                  aria-hidden="true"
                                ></i>
                                <span> 64</span>
                              </a>

                              <form
                                class="form-like"
                                action="/like"
                                method="POST"
                              >
                                <input
                                  type="hidden"
                                  name="tweetId"
                                  value={item._id}
                                />
                                <button
                                  class="tweet-footer-btn button-like"
                                  type="submit"
                                >
                                  <i
                                    class="octicon octicon-heart"
                                    aria-hidden="true"
                                  ></i>
                                  <span> {item.likes}</span>
                                </button>
                              </form>
                              <a class="tweet-footer-btn">
                                <i
                                  class="octicon octicon-mail"
                                  aria-hidden="true"
                                ></i>
                                <span> 155</span>
                              </a>
                            </div>
                          </div>
                        </li>
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
