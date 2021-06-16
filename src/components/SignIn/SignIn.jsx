import "./SignIn.css";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import actions from "../../redux/actions/userActions";
import axios from "axios";
import { useDispatch } from "react-redux";

function SignIn() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    var params = { username: name, password: password };
    const getToken = async () => {
      const response = await axios.post(
        `https://backend-twitter-react.vercel.app/tokens`,
        {
          username: params.username,
          password: params.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data) {
        dispatch(actions.setUser(response.data));
        history.push("/home");
      }
    };
    getToken();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="backgroundIMG"></div>
            </div>
            <div className="col-md-12 col-lg-6 d-flex justify-content-center">
              <div className="registro">
                <div className="mb-3 text-center ">
                  <h1>Ingrese</h1>
                </div>

                <div className="mb-3">
                  <label for="username" className="form-label">
                    username
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="name"
                    required
                    minlength="4"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3 ">
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minlength="4"
                  />
                </div>

                <div className="mb-3">
                  <a href="/signUp">
                    <small>¿No tienes una cuenta?</small>
                  </a>
                </div>
                <div className="mb-3">
                  <button
                    value="Log Chore"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
