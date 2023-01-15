import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Component/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* share Layout to others components needs Outlet */}
    </>
  );
};

export default Home;
