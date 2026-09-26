import React from 'react';
import Menus from '../Menus/Menus';

const navigationData  = [
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
    return (
        <nav>
          <ul className='flex gap-5'>
            {
              navigationData.map((nav,index) => <Menus nav={nav} key={index}></Menus>)
            }
          </ul>
        </nav>
    );
};

export default Navbar;