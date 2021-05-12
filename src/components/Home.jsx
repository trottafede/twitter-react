import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div id="main_page">
        <div className="main-container">
          <div className="row profile-background">
            <div className="container">
              <div className="avatar-container">
                <div className="avatar">
                  <img src="logo192.png" alt="" />
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
                      <form action="/create" method="POST">
                        <label for="text">Que estoy pensando?</label>
                        <input
                          type="text"
                          name="text"
                          id="text"
                          className="form-control mb-3"
                        />
                        <button type="submit" className="btn btn-search-bar">
                          Send tweet
                        </button>
                      </form>
                    </div>
                  </li>

                  <li className="tweet-card">
                    <div className="tweet-content">
                      <div className="tweet-header">
                        <span className="fullname"></span>
                        <span className="username">@</span>
                        <span className="tweet-time"></span>
                      </div>
                      <a>
                        <img
                          className="tweet-card-avatar"
                          src="logo192.png"
                          alt="profile pic"
                        />
                      </a>
                      <div className="tweet-text">
                        <p className="" lang="es" data-aria-label-part="0">
                          XXXXX
                        </p>
                      </div>
                      <div className="tweet-footer">
                        <a className="tweet-footer-btn">
                          <i
                            className="octicon octicon-comment"
                            aria-hidden="true"
                          ></i>
                          <span> 18</span>
                        </a>
                        <a className="tweet-footer-btn">
                          <i
                            className="octicon octicon-sync"
                            aria-hidden="true"
                          ></i>
                          <span> 64</span>
                        </a>

                        <form
                          className="form-like"
                          action="/like"
                          method="POST"
                        >
                          <input type="hidden" name="tweetId" value="22" />
                          <button
                            className="tweet-footer-btn button-like"
                            type="submit"
                          >
                            <i
                              className="octicon octicon-heart"
                              aria-hidden="true"
                            ></i>
                            <span> </span>
                          </button>
                        </form>
                        <a className="tweet-footer-btn">
                          <i
                            className="octicon octicon-mail"
                            aria-hidden="true"
                          ></i>
                          <span> 155</span>
                        </a>
                      </div>
                    </div>
                  </li>
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
