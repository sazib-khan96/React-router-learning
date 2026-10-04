import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './Root.css'

const Root = () => {
    return (
        <div className='flex dashbord gap-5'>
            <div className='sideabr'>
                <Sidebar></Sidebar>
            </div>
           <main className='content'>
             <Outlet></Outlet>
           </main>
        </div>
    );
};

export default Root;