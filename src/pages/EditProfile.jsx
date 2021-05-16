import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Edit from "../components/UserHome/EditProfile";

function Home() {
  return (
    <div>
      <Navbar />
      <Edit />
      <Footer />
    </div>
  );
}

export default Home;
