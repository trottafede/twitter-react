import React from "react";
import Like from "./Like";

function TweetCard({ item, updateHomeReload }) {
  // console.log(item.author.firstName);
  return (
    <li className="tweet-card">
      <div className="tweet-content">
        <div className="tweet-header">
          <span className="fullname">
            <strong>
              {item.author.firstName} {item.author.lastName}
            </strong>
          </span>
          <span className="username">@{item.author.userName}</span>
          <span className="tweet-time">
            {new Date(item.createdAt).toDateString()}
          </span>
        </div>
        <a>
          <img
            className="tweet-card-avatar"
            src={item.author.image}
            alt="profile pic"
          />
        </a>
        <div className="tweet-text">
          <p className="" lang="es" data-aria-label-part="0">
            {item.text}
          </p>
        </div>
        <div className="tweet-footer">
          <a className="tweet-footer-btn">
            <i className="octicon octicon-comment" aria-hidden="true"></i>
            <span> 18</span>
          </a>
          <a className="tweet-footer-btn">
            <i className="octicon octicon-sync" aria-hidden="true"></i>
            <span> 64</span>
          </a>

          <Like item={item} updateHomeReload={updateHomeReload} />
          <a className="tweet-footer-btn">
            <i className="octicon octicon-mail" aria-hidden="true"></i>
            <span> 155</span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default TweetCard;
