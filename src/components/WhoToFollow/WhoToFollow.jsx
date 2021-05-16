import React from "react";

function WhoToFollow() {
  return (
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
  );
}

export default WhoToFollow;
