import React from 'react';
import Task from '../Task/Task';
const TaskStatus = ({completedTask}) => {
    console.log(completedTask)
    return (
        <div className='mt-8 p-3 '>
            <h2 className='text-3xl'>Task Status</h2>
            <div>
                {
                    completedTask.map(task => <Task key={task.id} task={task}></Task>)
                }
            </div>
        </div>
    );
};

export default TaskStatus;