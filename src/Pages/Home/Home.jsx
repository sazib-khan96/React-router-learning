import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import CustomerTickets from '../../Components/CustomerTickets/CustomerTickets'



const Home = () => {

    const [customerData,setCustomerData] = useState([])
    useEffect(() => {
        fetch('CustomerData.json')
        .then(res => res.json())
        .then(data => {
            setCustomerData(data)
        })
    },[])
    return (
        <div className='my-8'>
           <Hero></Hero>
           <CustomerTickets customerData={customerData}></CustomerTickets>
        </div>
    );
};

export default Home;