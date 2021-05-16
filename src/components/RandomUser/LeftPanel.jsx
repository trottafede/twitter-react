import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function LeftPanel() {
  let { id } = useParams();

  const user = useSelector((state) => state.userReducer);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://backend-twitter-react.vercel.app/userInfo/${id}`, {
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
  }, [user.token, id]);

  return (
    <div class="profile-header">
      <h3 class="profile-fullname">
        <span>
          {userInfo.firstName} {userInfo.lastName}
        </span>
      </h3>

      <Link to="/editProfile">
        <span>Editar perfil</span>
      </Link>

      <h2 class="profile-element">
        <span>@ {userInfo.userName}</span>
      </h2>
      <h2 class="profile-element">
        <span>{userInfo.bio} Acá iria mi bio</span>
      </h2>

      <span class="profile-element profile-website">
        <i class="octicon octicon-location"></i>&nbsp;Montevideo, Uruguay
      </span>
      <h2 class="profile-element">
        <i class="octicon octicon-calendar"></i>Creado:{"  "}
        {new Date(userInfo.createdAt).toDateString()}
      </h2>
      <button class="btn btn-search-bar tweet-to-btn">
        Tweet to @{userInfo.userName}
      </button>
    </div>
  );
}

export default LeftPanel;
