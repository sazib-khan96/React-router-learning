import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import CustomerTickets from "../../Components/CustomerTickets/CustomerTickets";
import TaskStatus from "../../Components/TaskStatus/TaskStatus";



const Home = () => {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    fetch("CustomerData.json")
      .then((res) => res.json())
      .then((data) => {
        setCustomerData(data);
      });
  }, []);

  const [count, setCount] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const taskData = (customer) => {
    const newcompleteTask = [...completedTask, customer];
    setCompletedTask(newcompleteTask);
  };
//   const [complete,setComplete] = useState([])

//   const completeBtnhandle = (completeTask) => {
//     const newCompleteTask = [...complete,completeTask]
//     setComplete(newCompleteTask)
   
//     complete.filter(item => {
//        const fillterItems =  completeTask.id !== item.id; 
//        setComplete(fillterItems)
//     })
    
//   };

const [complete, setComplete] = useState([]);
console.log(complete)

const completeBtnhandle = (task) => {
 const newtask = [...complete,task]
 setComplete(newtask)
}
  

  return (
    <div className="my-8">
     

        <Hero count={count} complete={complete}></Hero>
        <div className="flex gap-5">
          <CustomerTickets
            taskData={taskData}
            count={count}
            setCount={setCount}
            customerData={customerData}
          ></CustomerTickets>
        <TaskStatus completedTask={completedTask} completeBtnhandle={completeBtnhandle}></TaskStatus>
        </div>

     
    </div>
  );
};

export default Home;
