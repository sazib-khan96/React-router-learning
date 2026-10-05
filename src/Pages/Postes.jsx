import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Postes = () => {
    const posts = useLoaderData()
    console.log(posts)
    return (
        <div className='w-9/12 mx-auto p-5'>
            <h1>This is post page : {posts.length}</h1>
            <div>
                {
                   posts.map(post => <Post key={post.id} post={post}></Post> ) 
                }
            </div>
        </div>
    );
};

export default Postes;