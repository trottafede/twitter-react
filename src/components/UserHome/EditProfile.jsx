import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditProfile() {
  const axios = require("axios");
  const user = useSelector((state) => state.userReducer);
  const [userInfo, setUserInfo] = useState([]);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();
  const [bio, setBio] = useState();
  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    var params = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      bio: bio,
      image: image,
    };
    const getToken = async () => {
      const response = await axios.patch(
        `https://backend-twitter-react.vercel.app/user/${user.userId}`,

        {
          firstName: params.firstName,
          lastName: params.lastName,
          username: params.username,
          email: params.email,
          password: params.password,
          bio: params.bio,
          image: params.image,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response) history.push("/user");
    };
    getToken();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="registro">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="mb-3 d-flex justify-content-center">
                <h1>Información de perfil</h1>
              </div>

              <div className="mb-3 col-sm-12">
                <label for="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                  value={firstName}
                  minlength="4"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3 col-sm-12">
                <label for="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={lastName}
                  required
                  minlength="4"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-3 col-sm-12">
                <label for="bio" className="form-label">
                  Biografia
                </label>
                <textarea
                  className="form-control"
                  name="bio"
                  id="bio"
                  cols="10"
                  rows="5"
                  minlength="10"
                  onChange={(e) => setBio(e.target.value)}
                >
                  {userInfo.bio}
                </textarea>
              </div>

              <div className="mb-3 col-sm-12">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  name="userName"
                  value={userInfo.userName}
                  disabled
                  minlength="4"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3 col-sm-12">
                <label for="username" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="text"
                  className="form-control"
                  name="password"
                  value={password}
                  minlength="4"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 col-sm-12">
                <label for="email" className="form-label">
                  e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3 col-sm-12">
                <label for="image" className="form-label">
                  Ingrese url de profile pic
                </label>
                <input
                  id="image"
                  type="text"
                  className="form-control"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <span className="mb-3 d-grid gap-2 ">
                <button className="btn btn-primary" type="submit">
                  Editar
                </button>
              </span>

              <span className="mb-3 d-grid gap-2 ">
                <Link to="/user" className="btn btn-danger">
                  Volver
                </Link>
              </span>
            </form>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 d-flex justify-content-center">
          <div className="avatar">
            <img src={userInfo.image} alt={userInfo.firstName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
