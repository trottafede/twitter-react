import "./SignUp.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const axios = require("axios");

function SignUp() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    var params = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
    };
    const getToken = async () => {
      const response = await axios.post(
        `https://backend-twitter-react.vercel.app/user`,
        {
          firstName: params.firstName,
          lastName: params.lastName,
          username: params.username,
          email: params.email,
          password: params.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) history.push("/signIn");
    };
    getToken();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="registro">
            <form
              className="row g-3 "
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="col-md-12">
                <h1>Registrese</h1>
              </div>

              <div className="mb-3 col-md-12">
                <label for="firstName" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="Nombre"
                  required
                  minlength="4"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="mb-3 col-md-12 ">
                <label for="lastName" className="form-label">
                  Apellido
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Apellido"
                  required
                  minlength="4"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-3 col-md-12">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  name="userName"
                  placeholder="Nombre de usuario"
                  required
                  minlength="4"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3 col-md-12">
                <label for="email" className="form-label">
                  e-mail
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="suemail@algo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3 col-md-12">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  required
                  minlength="4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 col-md-12">
                <Link to="/signIn">
                  <small>¿Ya tienes una cuenta?</small>
                </Link>
              </div>
              <div className="mb-3 d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary">Registrarse</button>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-12 col-lg-6">
          <div>
            <div className="backgroundIMG"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
