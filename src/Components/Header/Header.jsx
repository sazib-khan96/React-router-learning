
import {  NavLink } from "react-router-dom";
import Button from "../Button/Button";

import './Header.css'


const Header = () => {


    return (
        <div>

           
            <header>
                <nav className="bg-gray-200 p-3 flex justify-between items-center">
                    <ul className="flex gap-5 font-semibold justify-center">
                       <li><NavLink to="/">Home</NavLink></li>
                       <li><NavLink to="/about">About</NavLink></li>
                       <li><NavLink to="/project">Project</NavLink></li>
                       <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <Button></Button>
                </nav>
                
            </header>

            
            
        </div>
    );
};

export default Header;