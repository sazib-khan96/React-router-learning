import React from 'react';

const Customer = ({customer}) => {
    const {id,title,category,priority,status} = customer
    return (
        <div className='p-3 shadow-xl rounded-xl cursor-pointer '>
            <div className='flex gap-5 justify-between'>
                <h3>{title}</h3>
                <button className='my_custom_btn'>{status}</button>
            </div>
            <div className='flex gap-3'>
                <p>{id}</p>
                <p>{category}</p>
                <p>{priority}</p>
            </div>
        </div>
    );
};

export default Customer;