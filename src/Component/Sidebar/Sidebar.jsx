import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'
const Sidebar = () => {
  return (
    <aside className="p-5 text-white">
      <h1>Hello World</h1>
      <nav>
        <ul className="flex flex-col py-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/updates">Updates</NavLink>
          <NavLink to="/postes">Posts</NavLink>
          <NavLink to="/addNew">Add New</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
