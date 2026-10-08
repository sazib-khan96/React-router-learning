import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = ({post}) => {
    
    const {title,id} = post
    return (
        <div className='flex gap-5 my-5 justify-between'>
            <h3 className='text-2xl'>{title}</h3>
            <NavLink to={`/post/${id}`} className="my_custom_btn">View More</NavLink>
        </div>
    );
};

export default Post;