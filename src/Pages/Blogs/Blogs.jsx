import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../../Components/Post/Post';

const Blogs = () => {
    const posts = useLoaderData()
    
    return (
        <div className='mt-8 w-8/12 mx-auto'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post> )
            }
        </div>
    );
};

export default Blogs;