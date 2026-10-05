import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Pro = ({item}) => {
    const {id} = item
    const [show,setShow] = useState(false)

    
    return (
        <div className='rounded-2xl border p-5'>
            <img src={item.thumbnail} alt="" />
            <h1>{item.title}</h1>
            <p>${item.price}</p>
            <div className='flex justify-between'>
                <button className='p-2 border'>Buy Now{id}</button>
                <NavLink to={`product${id}`}>
                    <button onClick={() => setShow(!show)} className='p-2 bg-amber-300'>{show ? "Hide" : "Show"}</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Pro;