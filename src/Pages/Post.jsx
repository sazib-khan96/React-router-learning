import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title} = post
    return (
        <div>
            <h1 className='text-2xl'>{title}</h1>
            <NavLink to={`/post/${id}`}>
                <button className='bg-amber-500 px-3 py-2'>Show Deatail</button>
            </NavLink>
        </div>
    );
};

export default Post;