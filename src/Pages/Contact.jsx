import React from "react";

const Contact = () => {
 const formHandle = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.tel.value
    console.log(name,email,phone)
 }


  return (
    <div>
      <h1>This is contact page</h1>
      <div className="w-6/12 mx-auto border p-3">
        <form onSubmit={formHandle}>
          <input className="w-full border p-2 my-2" name="name" type="text" placeholder="Enter Name" />
          <br />
          <input className="w-full border p-2 my-2" name="email"  type="email" placeholder="Enter Email" />
          <br />
          <input className="w-full border p-2 my-2" name='tel'  type="tel" placeholder="Enter Phone" />
          <br />
          <input className="px-4 py-3 border bg-amber-300" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
