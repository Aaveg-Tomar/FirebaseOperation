import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import {getAuth , onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';


const auth = getAuth(app);

const Home = () => {

  const [ user , setuser] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setuser(true);
      } else {
        setuser(false);
      }
    })
  } , [])

  // this the way to store uid in the local storage 
  // useEffect(()=>{
  //   const data = localStorage.getItem("user");
  //   if(data != null)
  //   {
  //     setuser(true);
  //   }
  //   console.log(data);
  // } , [])

  

  return (
    <>
      {
        user ? (
          <div>
            <div><Logout/></div>
          </div>
        ) : (
          <div>
            <div><Link to="/signup">Signup</Link ></div >
            <div><Link to="/login">Login</Link></div>
          </div >
        )
      }
    </>
  )
}

export default Home