import React, { useState } from 'react';
import Customer from '../Customer/Customer'
const CustomerTickets = ({customerData}) => {
    
    return (
        <div className='mt-8'>
            <h2 className='text-3xl'>Customer Tickets</h2>
            <div className='grid grid-cols-2 gap-5'>
                {
                    customerData.map(customer => <Customer key={customer.id} customer={customer}></Customer>)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;