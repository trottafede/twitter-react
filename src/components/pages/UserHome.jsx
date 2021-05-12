import React from "react";

import Navbar from "../Navbar";
import Footer from "../Footer";
import UserHomeComp from "../UserHome";

function UserHome() {
  return (
    <div>
      <Navbar />
      <UserHomeComp />
      <Footer />
    </div>
  );
}

export default UserHome;
