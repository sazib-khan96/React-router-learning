import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center p-3 bg-gray-200">
      <ul>
        <li className="flex gap-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/form">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
