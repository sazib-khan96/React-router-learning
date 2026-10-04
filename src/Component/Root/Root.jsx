import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-9/12 mx-auto px-3">
      <header>
        <Header></Header>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
