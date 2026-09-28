import React, { useState } from "react";
import Menus from "../Menus/Menus";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = navigationData.map((nav, index) => (
    <Menus nav={nav} key={index}></Menus>
  ));
  return (
    <nav className="flex justify-between p-3 bg-gray-200">
      <span className="flex gap-2 ">
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <X className="text-red-400" />
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
        </div>
        {/* mobile version  */}
        <ul
          className={`md:hidden absolute top-20  transition-transform duration-500 w-50  ${open ? "-translate-x-3 " : "-translate-x-80 "}`}
        >
          {menuItems}
        </ul>
        <h1>Logo</h1>
      </span>
      {/* desktop version  */}
      <ul className="md:flex gap-5 hidden ">{menuItems}</ul>
      <button className="px-5 py-2 bg-amber-50 shadow-2xl rounded-4xl font-semibold cursor-pointer">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
