import React, { useState } from 'react';
import Customer from '../Customer/Customer'
const CustomerTickets = ({customerData,count,setCount,taskData}) => {
    
    return (
        <div className='mt-8'>
            <h2 className='text-3xl'>Customer Tickets</h2>
            <div className='grid grid-cols-2 gap-5 w-100%'>
                {
                    customerData.map(customer => <Customer taskData={taskData} count={count} setCount={setCount} key={customer.id} customer={customer}></Customer>)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;