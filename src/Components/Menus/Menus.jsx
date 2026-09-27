
import React from 'react';
import { X } from 'lucide-react';
const Menus = ({nav}) => {
    const {name,path} = nav

    return (
        
        <li className='p-2 font-semibold hover:text-yellow-500 bg-gray-200'><a href={path} ></a>{name}</li>
    );
};

export default Menus;