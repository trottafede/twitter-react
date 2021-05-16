import React from "react";
import Like from "../Like";
import "./TweetCard.css";
import { Link } from "react-router-dom";

function RanomUserTweets({ item }) {
  let url = "/user/" + item.author._id;
  console.log(url);

  return (
    <li className="tweet-card ">
      <div className="tweet-content">
        <div className="tweet-header d-flex justify-content-between">
          <span className="fullname">
            <Link to={url}>
              <strong>
                {item.author.firstName} {item.author.lastName}
              </strong>
            </Link>
          </span>
          <span className="username">@{item.author.userName}</span>
          <span className="tweet-time">
            {new Date(item.createdAt).toDateString()}
          </span>
        </div>
        <img
          className="tweet-card-avatar"
          src={item.author.image}
          alt="profile pic"
        />
        <div className="tweet-text">
          <p className="" lang="es" data-aria-label-part="0">
            {item.text}
          </p>
        </div>
        <div className="tweet-footer">
          <span className="tweet-footer-btn">
            <i className="octicon octicon-comment" aria-hidden="true"></i>
            <span> 0</span>
          </span>
          <span className="tweet-footer-btn">
            <i className="octicon octicon-sync" aria-hidden="true"></i>
            <span> 0</span>
          </span>

          <Like item={item} />
          <span className="tweet-footer-btn">
            <i className="octicon octicon-mail" aria-hidden="true"></i>
            <span> 0</span>
          </span>
        </div>
      </div>
    </li>
  );
}

export default RanomUserTweets;
