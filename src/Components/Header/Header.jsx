import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-2 my_bg_color">
        <div>
            <h1>CS—Ticket System</h1>      
        </div>
      <ul className="flex gap-5 justify-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/help">Help</NavLink>
      </ul>
      <div>
        <button className="my_custom_btn">New Ticket</button>
      </div>
    </header>
  );
};

export default Header;
