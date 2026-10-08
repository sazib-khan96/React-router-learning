import React from 'react';
import SocialIcons from '../SocialIcons/SocialIcons'
import Services from '../ServicesItem/Services'

const Footer = () => {
    return (
        <div className='my_bg_color px-3 py-12 grid grid-cols-4 gap-8'>
           
           <div>
            <h3 className='mb-5'>CS — Ticket System</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>

           <div className='mb-5'>
             <h3>Company</h3>

           </div>

           <div className='mb-5'>
            <h3>Services</h3>
            <Services></Services>
           </div>

           <div className='mb-5'>
            <h3>Follow Us</h3>
            <SocialIcons></SocialIcons>
           </div>
        </div>
    );
};

export default Footer;