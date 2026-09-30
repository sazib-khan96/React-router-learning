import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
const Root = () => {
    return (
        <div className='max-w-9/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;