import "./UserHome.css";
import { Link } from "react-router-dom";

import React from "react";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-toggleable-md fixed-top">
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse container">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                <i class="octicon octicon-home" aria-hidden="true"></i> Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="octicon octicon-bell"></i> Notifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="octicon octicon-inbox"></i> Messages
              </a>
            </li>
          </ul>

          {/* <form class="navbar-form" role="search">
            <div class="input-group">
              <input
                type="text"
                class="form-control input-search"
                placeholder="Search Twitter"
                name="srch-term"
                id="srch-term"
              />
              <div class="input-group-btn">
                <button class="btn btn-default btn-search" type="submit">
                  <i class="octicon octicon-search navbar-search-icon"></i>
                </button>
              </div>
            </div>
          </form> */}

          <a class="mr-3 ml-3" href="/user">
            <strong></strong>
          </a>

          <Link className="mr-3" to="/user">
            Nombre de Usuario
          </Link>

          <button class="btn btn-search-bar">Tweet</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
