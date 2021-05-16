import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import React from "react";

function Navbar() {
  const user = useSelector((state) => state.userReducer);
  return (
    <nav className="navbar navbar-toggleable-md ">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">
              <i className="octicon octicon-home" aria-hidden="true"></i> Home
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="octicon octicon-bell"></i> Notifications
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="octicon octicon-inbox"></i> Messages
            </a>
          </li>
        </ul>

        <form className="navbar-form" role="search">
          <div className="input-group">
            <input
              type="text"
              className="form-control input-search"
              placeholder="Search Twitter"
              name="srch-term"
              id="srch-term"
            />
            <div className="input-group-btn">
              <button className="btn btn-default btn-search" type="submit">
                <i className="octicon octicon-search navbar-search-icon"></i>
              </button>
            </div>
          </div>
        </form>

        <Link to="/user">
          <span className="item">{user.userName}</span>
        </Link>
        <Link to="/signIn">
          <span className="item">Logout</span>
        </Link>

        <button className="btn btn-search-bar">Tweet</button>
      </div>
    </nav>
  );
}

export default Navbar;
