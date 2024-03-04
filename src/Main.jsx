import React from "react";
import { Route, Routes } from "react-router";
import Home from "./LandingPage/Home";
import ProductSlider from "./LandingPage/parts/ProducSlider";
const Main = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dummy" element={<ProductSlider />} />
      </Routes>
    </>
  );
};

export default Main;
