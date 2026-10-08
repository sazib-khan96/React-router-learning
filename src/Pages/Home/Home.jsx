import React, {  createContext, useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import CustomerTickets from '../../Components/CustomerTickets/CustomerTickets'
import TaskStatus from '../../Components/TaskStatus/TaskStatus'



const Home = () => {

    const [customerData,setCustomerData] = useState([])
    useEffect(() => {
        fetch('CustomerData.json')
        .then(res => res.json())
        .then(data => {
            setCustomerData(data)
        })
    },[])

    const [count , setCount] = useState([])
   const [completedTask,setCompletedTask] = useState([])

    const taskData = (customer) => {
        const newcompleteTask = [...completedTask,customer]
        setCompletedTask(newcompleteTask)
    }
    return (
        <div className='my-8'>
           <Hero count={count} completedTask={completedTask}></Hero>
           <div className='flex gap-5'>
            <CustomerTickets taskData={taskData} count={count} setCount={setCount} customerData={customerData}></CustomerTickets>
            <TaskStatus completedTask={completedTask} ></TaskStatus>
           </div>
        </div>
    );
};

export default Home;