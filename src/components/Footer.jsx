import "./Home.css";

import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md">
              <div class="d-flex justify-content-between">
                <div>
                  <i class="fab fa-twitter"> </i>{" "}
                  <a href="">Martin Vlasanovich</a>
                </div>
                <div>
                  <i class="fab fa-twitter"> </i>
                  <a href="">Luis Romero</a>
                </div>
                <div>
                  <i class="fab fa-twitter"> </i>{" "}
                  <a href="#">Federico Trotta</a>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md mt-3 mb-3">
              <hr />
            </div>
          </div>

          <div class="row">
            <div class="col-md">
              <div class="d-flex justify-content-center">
                <p>Hack Academy Bootcamp 2021</p>
              </div>
            </div>
          </div>
        </div>
        <script src="/js/app.js"></script>
      </footer>
    </div>
  );
}

export default Footer;
