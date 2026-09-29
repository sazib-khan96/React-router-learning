import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';
 import "./Service.css";

const Service = () => {
    return (
        <div className='p-8 '>
           <h1 className='text-3xl '>All Services</h1> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, eaque. Voluptates quidem illum, veritatis ducimus fuga id ratione praesentium dolor!</p>

           <div className='mt-10'>
               <ul>
                <li className='flex gap-5'>
                  <NavLink className='bg-amber-500 p-3' to="/tab1">TAB 1</NavLink>
                  <NavLink className='bg-amber-500 p-3' to="/tab2">TAB 2</NavLink>
                  <NavLink className='bg-amber-500 p-3' to="/tab3">TAB 3</NavLink>
                </li>
               </ul>
           </div>
           <div className='bg-amber-200 mt-3 p-3'>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Service;