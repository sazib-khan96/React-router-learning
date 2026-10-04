import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between items-center'>
            <div>
                <h1>Logo</h1>
            </div>
            <nav className='flex gap-5 justify-center p-3'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/help'>Help</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <div>
            <button>Order Now</button>
        </div>
        </header>
    );
};

export default Header;