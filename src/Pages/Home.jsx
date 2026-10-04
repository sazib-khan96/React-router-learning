import React from "react";
import "../Component/Style/Style.css";

const Home = () => {
  return (
    <div className="Hero-Container flex items-center">
     <div>
         <h1 className="text-9xl text-white">Building</h1>
         <h1 className="text-8xl text-white ml-20">Tomorrow</h1>
         <h1 className="text-5xl text-white ml-120">With</h1>
     </div>
     <div className="text-white border p-8 absolute top-50 right-50 ">
        <h1 className="text-3xl text-center">AKS</h1>
        <p>100% Pure Steel</p>
     </div>
    </div>
  );
};

export default Home;
