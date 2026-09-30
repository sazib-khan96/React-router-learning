import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({user}) => {
    const {name,id,email} = user
    return (
        <div className='p-5 border mt-5'>
            <h1>{name}</h1>
            <p>{email}</p>
            <NavLink to="./users/user">Show</NavLink>
        </div>
    );
};

export default User;