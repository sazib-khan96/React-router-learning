
import React from 'react';

const Menus = ({nav}) => {
    const {name,path} = nav

    return (
        
        <li><a href={path}></a>{name}</li>
    );
};

export default Menus;