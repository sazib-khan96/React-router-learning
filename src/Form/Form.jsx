import React from 'react';

const Form = () => {

    const formHandle = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        
    }


    return (
        <div className='w-5/12 mx-auto mt-8'>
            <h1 className='text-2xl my-3'>React Form Handle</h1>
            <div className='border p-5 bg-amber-50 '>

                <form onSubmit={formHandle}>
                    <input type="text" placeholder='Your Name' name='name'/>
                    <br />
                    <input type="email"  placeholder='Your Email' name='email'/>
                    <br />
                    <button type="submit" className='bg-amber-500 px-3 py-2 mt-3 text-white'>Submit</button>
                </form>

            </div>
        </div>
    );
};

export default Form;