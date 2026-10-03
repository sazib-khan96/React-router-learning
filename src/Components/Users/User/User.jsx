import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';



const User = ({user}) => {
    const {name,id,email} = user

    const [show, setShow] = useState(false)

    const btnChangeHandle =() => {
         
        if(show){
           setShow(true)
        }
        else{
            setShow(false)
        }

        userFatch()
    }
const userFatch = fetch(`https://jsonplaceholder.typicode.com/${id}`).then(res => res.json())
.then( data => console.log(data))

    return (
        <div className='p-5 border mt-5 space-y-5'>
            <h1>{name}</h1>
            <p>{email}</p>
            <NavLink onClick={btnChangeHandle} className='border bg-amber-400 px-3 py-2' to="./users/user">{setShow === false ? "Hide" : 'Show'}</NavLink>
        </div>
    );
};

export default User;