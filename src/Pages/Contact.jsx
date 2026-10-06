import React from "react";

const Contact = () => {
  //  const formHandle = (e) =>{
  //     e.preventDefault()
  //     const name = e.target.name.value
  //     const email = e.target.email.value
  //     const phone = e.target.tel.value
  //     console.log(name,email,phone)
  //  }

  const formAction = (event) => {
    const name = event.get("name");
    const email = event.get("email");
    const tel = event.get("tel");
    
     if(tel.length < 11 || tel === ''){
       alert('plase input your 11 digit Number')
       return
    }
    const gender = event.get('gender')
    console.log(name, email, tel,gender);
  };

  return (
    <div>
      <h1>This is contact page</h1>
      <div className="w-6/12 mx-auto border p-3">
        <form action={formAction}>
          <input
            className="w-full border p-2 my-2"
            name="name"
            type="text"
            placeholder="Enter Name"
          />
          <br />
          <input
            className="w-full border p-2 my-2"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <input
            className="w-full border p-2 my-2"
            name="tel"
            type="tel"
            placeholder="Enter Phone"
          />
          <br />

          <div>
            <p>Select Your Gender:</p>
            <label>
              <input type="radio" name="gender" value="Mail" defaultChecked/>
              Mail
            </label>
            <br />
            <label>
              <input type="radio" name="gender" value="Femail" /> Femail
            </label>
          </div>

            <select className="border w-full p-2" >
                <option>Select Your Language </option>
                <option value="bangla">Bangla</option>
                <option value="EN">English</option>
                <option value="Hindi">Hindi</option>
            </select>

            <input type="checkbox" defaultChecked name='checkbox' /> Are you agree with me?

          <br />
          <input
            className="px-4 py-3 border bg-amber-300"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
