import "./Footer.css";
import React from "react";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="d-flex justify-content-between">
              <div>
                <i className="fab fa-twitter"> </i>{" "}
                <a href="/">Martin Vlasanovich</a>
              </div>
              <div>
                <i className="fab fa-twitter"> </i>
                <a href="/">Luis Romero</a>
              </div>
              <div>
                <i className="fab fa-twitter"> </i>{" "}
                <a href="/">Federico Trotta</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md mt-3 mb-3">
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <p>Hack Academy Bootcamp 2021</p>
            </div>
          </div>
        </div>
      </div>
      <script src="/js/app.js"></script>
    </footer>
  );
}

export default Footer;
