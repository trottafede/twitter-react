import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UserHomeComp from "../components/UserHome/UserHome";

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
