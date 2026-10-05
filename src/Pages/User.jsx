import React, { use } from 'react';

import Person from '../Component/Person';

const User = ({userData}) => {
    const data = use(userData)
    return (
        <div>
            <h1>This is User Page</h1>
            <div className='grid grid-cols-5 gap-8'>
               {
                data.map(person => <Person key={person.id} person={person}></Person>)
               }
            </div>
        </div>
    );
};

export default User;