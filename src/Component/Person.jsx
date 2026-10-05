import React, { useState } from 'react';


const Person = ({person}) => {
const {name,username,id} = person
const [user,setUser] = useState('')
console.log(user)
    
const userDataLoad = () => {
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json()).then( users => setUser(users))
}
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}{id}</p>

             {
               user && <div className='border p-3 bg-amber-100'>
                <h1>{user.email}</h1>
                <p>{user.phone}</p>
                <p>{user.website}</p>
               </div>
            }
           
         <button onClick={() =>userDataLoad(id)} className='p-3 bg-amber-500'>show Details</button>
           
        </div>
    );
};

export default Person;