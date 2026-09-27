import React from 'react';
import { use } from "react";
import Users from '../Users/Users';

const Showaxios = ({getPost}) => {

     const normalFeatch = use(getPost)
     const users = normalFeatch.data
    //  console.log(users)
   
    return (
        <div>
           {
                users.map((user,i) => <Users key={i} user={user}></Users> )
           }
        </div>
    );
};

export default Showaxios;