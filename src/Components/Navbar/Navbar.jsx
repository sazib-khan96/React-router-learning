import React, { useState } from 'react';
import Menus from '../Menus/Menus';
import { Menu,X } from 'lucide-react';

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

  const [open,setOpen]= useState(false)

  const menuItems =  navigationData.map((nav,index) => <Menus nav={nav} key={index}></Menus>)
    return (
        <nav onClick={()=> setOpen(!open)} className='flex justify-between'>
          <span className='flex gap-2'>
           
            
            {
              open?<X  className='text-red-400'/>: <Menu className='md:hidden'></Menu>
            }
            <ul className=' md:hidden'>
              {menuItems}
            </ul>
          <h3>Logo</h3>
          </span>
          <ul className='md:flex gap-5 hidden '>
            {
             menuItems
            }
          </ul>
          <button>Sign In</button>
        </nav>
    );
};

export default Navbar;