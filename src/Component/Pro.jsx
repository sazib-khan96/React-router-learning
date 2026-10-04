import React from 'react';

const Pro = ({item}) => {
    return (
        <div className='rounded-2xl'>
            <img src={item.thumbnail} alt="" />
            <h1>{item.title}</h1>
            <p>${item.price}</p>
            <button className='p-5'>Buy Now</button>
        </div>
    );
};

export default Pro;