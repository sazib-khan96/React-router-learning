import React from 'react';

const Post = ({post}) => {
    const {id,title} = post
    return (
        <div>
            <h1 className='text-2xl'>{title}</h1>
            
        </div>
    );
};

export default Post;