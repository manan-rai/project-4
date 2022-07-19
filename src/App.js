import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "./component/common/Header/Header";
import "./App.css";
import Homepages from "./component/Home/Homepages";
import Footer from "./component/common/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Homepages />
      <Footer />
    </>
  );
};

export default App;
