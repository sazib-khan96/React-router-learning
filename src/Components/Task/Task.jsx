import React, { useState } from 'react';

const Task = ({task}) => {

const {id,title,status,priority} = task

const priorityStatus = {
    High :"bg-red-400 text-red-200",
    Medium: "bg-green-200",
    Low : "bg-green-100",
}
    
    return (
        <div className='border border-gray-200 mt-3 rounded-2xl px-5 py-3 '>
            <h3 className='font-semibold mb-3'>{title}</h3>
           <div className='flex justify-between gap-5'>
             <h4>{id}</h4>
             <h4>{status}</h4>
           </div>
           <div className='flex justify-between gap-3'>
            <button className='my_custom_btn'>Completed</button>
            <button className={`px-4 py-2 rounded ${priorityStatus[priority]}`}>{priority}</button>
           </div>
        </div>
    );
};

export default Task;