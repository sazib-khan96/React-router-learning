import React from "react";
import Button from "../Button/Button";
// import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Service from "../Servise/Service";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button></Button>
          </div>
        </div>
      </div>

      <div>
        <Service></Service>
      </div>
    </div>
  );
};

export default Home;
