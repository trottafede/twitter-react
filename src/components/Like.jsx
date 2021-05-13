import React from "react";

function Like({ item, updateHomeReload }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3002/like", {
      method: "POST",
      body: JSON.stringify({
        tweetId: item._id,
        user: "60859cfae2f6edc6a746d43f",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateHomeReload();
      });
  };
  return (
    <form onSubmit={handleSubmit} class="form-like">
      <input type="hidden" name="tweetId" value={item._id} />
      <button class="tweet-footer-btn button-like" type="submit">
        <i class="octicon octicon-heart" aria-hidden="true"></i>
        <span> {item.likes}</span>
      </button>
    </form>
  );
}

export default Like;
