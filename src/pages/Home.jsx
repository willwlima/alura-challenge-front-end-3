import React from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner";
import ListOne from "../components/Product/ListOne";
import ListTwo from "../components/Product/ListTwo";
import ListThree from "../components/Product/ListThree";
import Footer from "./Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <ListOne />
      <ListTwo />
      <ListThree />
      <Footer />
    </>
  );
}

export default Home;
