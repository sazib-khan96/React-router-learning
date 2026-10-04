import { useState } from "react";


const Form = () => {

const [password,setPassword] = useState('')
const [err, setErr] = useState('')
    const formHandle = (e) => {
        e.preventDefault()
        console.log(e.target.password.value)
    }
    
 const onChange = (e) => {
   console.log(e.target.value)
   setPassword(e.target.value)

   if(password.length < 6 ){
     setErr('lwnth kom')
   }
   else{
    setErr('')
   }
 }



  return (
    <div>
      <form onSubmit={formHandle}>
        <input defaultValue={password} onChange={onChange} name='password' type="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
     <p className="text-red-500">{err}</p>
    </div>
  );
};

export default Form;
