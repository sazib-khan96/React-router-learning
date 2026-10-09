import React from 'react';

const Hero = ({count,complete}) => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex flex-col justify-center items-center h-[400px] rounded-2xl shadow-lg bg-green-300'>
                <h2 className='text-3xl my_text_color'>In Progress</h2>
                <span>{count.length}</span>
            </div>
            <div className='flex flex-col justify-center items-center h-[400px] rounded-2xl shadow-lg bg-green-500'>
                <h2 className='text-3xl my_text_color'>Resolved</h2>
                <span>{complete.length}</span>
            </div>
            
        </div>
    );
};     

export default Hero;