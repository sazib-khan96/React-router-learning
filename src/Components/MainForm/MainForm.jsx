import React from 'react';
import Button from '../Button/Button';

const MainForm = () => {

    const formHendel =(e) =>{
        e.preventDefault()
        console.log(e.terget.name)
    }
    return (
        <div>
            <form onSubmit={formHendel}>
                <input className='p-3 border rounded border-yellow-200 outline-0' type="text" name="name"  placeholder='Your Name' />
                <br />
                <input className='p-3 border rounded border-yellow-200 outline-0'  type="email" name="email"  placeholder='Your Email'/>
                <br />
                <Button></Button>
            </form>
        </div>
    );
};

export default MainForm;