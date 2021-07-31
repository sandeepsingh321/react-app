import React from "react";
import web from "../src/image/p2.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common 
         name="Grow Your Bussiness"
         imgsrc={web} 
         visit="/service"
         btname="Get Started"
      />
    </>
  );
};

export default Home;

