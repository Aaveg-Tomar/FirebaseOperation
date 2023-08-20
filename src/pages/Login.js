import React, { useState } from 'react'
import {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
import {app} from '../firebase';
import { useNavigate } from 'react-router-dom';



const auth = getAuth(app);

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();


    const loginuser = () => {
        signInWithEmailAndPassword(auth , email , password).then(
          (value) => {
            const user = value.user;
            // localStorage.setItem("user" , JSON.stringify(user.uid))
            navigate("/");
            console.log(user);
          })
    }

    const handleEmail = (event) =>{
        setEmail(event.target.value)    
    }

    const handlePass = (event) =>{
        setPassword(event.target.value);
    }

  return (
   <>
     <div>
        <label>Email Addreass</label>
        <input onChange={handleEmail} type='email' value={email} placeholder='Email Address' required/>
     </div>
     <div>
        <label>Password</label>
        <input onChange={handlePass} type='password' value={password} placeholder='Password' required/>
     </div>
     <div>
        <button onClick={loginuser}>Login</button>
     </div>
   </>
  )
}

export default Login