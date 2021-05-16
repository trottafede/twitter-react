import React from "react";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RandUser from "../components/RandomUser/RandomUser";

function RandomUser() {
  return (
    <>
      <NavBar />
      <RandUser />
      <Footer />
    </>
  );
}

export default RandomUser;
