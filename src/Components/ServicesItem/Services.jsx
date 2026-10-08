import React from 'react';
import { NavLink } from 'react-router-dom';

const Services = () => {
    return (
        <div className='mt-5'>
            <ul className='flex flex-col gap-3'>
                <NavLink to="/Rank Boosting">Rank Boosting</NavLink>
                <NavLink>Live Game Support</NavLink>
                <NavLink>Custom Game Session</NavLink>
                <NavLink>Team Practice</NavLink>
                <NavLink>Pro Player Consultation</NavLink>
            </ul>
        </div>
    );
};

export default Services;