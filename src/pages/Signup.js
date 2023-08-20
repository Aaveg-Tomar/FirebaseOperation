import React, { useState } from 'react';
import  {getAuth , createUserWithEmailAndPassword , signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';


const auth = getAuth(app);
const gooleprovider = new GoogleAuthProvider();


const Signup = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const navigate = useNavigate();

    const createUser = () =>{
        createUserWithEmailAndPassword(auth , email , password).then((value) => {
            const user = value.user;
            // localStorage.setItem("user" , JSON.stringify(user.uid));
            navigate('/');         
        });
    }

    const signgoogle = () =>{
        signInWithPopup(auth , gooleprovider).then((value)=>{
            const user = value.user;
            navigate('/');
        })        
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePass = (event) =>{
        setPassword(event.target.value)
    }

    return (
        <>
            <div>
                <label>Email Address</label>
                <input  onChange={handleEmail} type='email' placeholder='Email Addreass' value={email} required />
            </div>
            <div>
                <label>Password</label>
                <input onChange={handlePass} type='password' placeholder='Password' value={password} required/>
            </div>
            <div>
                <button onClick={createUser}>Signup</button>
            </div>
            <div>
                <button onClick={signgoogle}>Signup With Google</button>
            </div>
        </>
    )
}

export default Signup