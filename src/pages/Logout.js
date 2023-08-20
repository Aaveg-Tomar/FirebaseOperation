import React from 'react';
import {getAuth , signOut} from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';


const auth = getAuth(app);

const Logout = () => {

    const navigate = useNavigate();

    const handleSignout = () =>{
        signOut(auth).then(()=> {
            navigate('/');
        })     
    }

  return (
    <>
     <button onClick={handleSignout}>Logout</button>
    </>
  )
}

export default Logout