import React, { useState } from 'react';

const Pro = ({item}) => {
    const [show,setShow] = useState(false)

    
    return (
        <div className='rounded-2xl border p-5'>
            <img src={item.thumbnail} alt="" />
            <h1>{item.title}</h1>
            <p>${item.price}</p>
            <div className='flex justify-between'>
                <button className='p-2 border'>Buy Now</button>
                <button onClick={() => setShow(!show)} className='p-2 bg-amber-300'>{show ? "Hide" : "Show"}</button>
            </div>
        </div>
    );
};

export default Pro;