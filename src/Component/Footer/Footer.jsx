import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-8 bg-black text-white py-20 px-3">
      <div>
        <h1>Logo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum animi,
          tempore quas ducimus expedita quae!
        </p>
      </div>
      <div>
        <h1>Usefull Links</h1>
        <div className="mt-3">
          <nav className="flex flex-col">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/user">User</NavLink>
          </nav>
        </div>
      </div>
      <div >
        <h1>Quick Links</h1>
        <div className="flex flex-col mt-3">
          <NavLink to="/post">Post</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
      </div>
      <div>
        <h1>form</h1>
      </div>
    </div>
  );
};

export default Footer;
