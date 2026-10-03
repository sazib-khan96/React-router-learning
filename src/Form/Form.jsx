import React from 'react';

const Form = () => {

   const formHandle = (data) => {
            console.log(data.get('name'))
            console.log(data.get("email"))
   }


    return (
        <div className='w-5/12 mx-auto mt-8'>
            <h1 className='text-2xl my-3'>React Form Handle</h1>
            <div className='border p-5 bg-amber-50 '>

                <form action={formHandle}>
                    <input type="text" placeholder='Your Name' name='name'/>
                    <br />
                    <input type="email"  placeholder='Your Email' name='email'/>
                    <br />
                    <input type="Submit" value="Submit" />
                </form>

            </div>
        </div>
    );
};

export default Form;