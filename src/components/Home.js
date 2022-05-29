import React from "react";
import Notes from "./Notes";
import Header from "./Header";
import Footer from "./Footer";
// import {BrowserRouter, Route, Routes} from "react-router-dom"

const Home = () => {
  return (
    <>
      <Header />
      <Notes />
      {/* <div id="notes-footer-space"> </div> */}
      <Footer />
    </>
  );
};

export default Home;
