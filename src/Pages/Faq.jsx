import React from 'react';
import { NavLink } from 'react-router-dom';


const Faq = () => {
    return (
        <div>
            <h1>This is FAQ page</h1>
            <div>
                 {/* <NavLink to='faq/general'>general</NavLink> */}
                 <NavLink to='faq/general'>General</NavLink>
                
            </div>
           
        </div>
    );
};

export default Faq;