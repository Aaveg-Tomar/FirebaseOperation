import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';
import { getFirestore, collection, addDoc  , getDoc , doc} from 'firebase/firestore'


const auth = getAuth(app);   // for authentication
const db = getFirestore(app); // forthe firestore

const Home = () => {

  const [user, setuser] = useState(false);
  const [documentData, setDocumentData] = useState(null);
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setuser(true);
      } else {
        setuser(false);
      }
    })
  }, [])

  // this the way to store uid in the local storage 
  // useEffect(()=>{
  //   const data = localStorage.getItem("user");
  //   if(data != null)
  //   {
  //     setuser(true);
  //   }
  //   console.log(data);
  // } , [])


  // Firestore Data add 
  const  addDatatoFirestore = async() => {
    await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
  }


  const getDocument = async() =>{
    const ref = doc(db , "users" , "26y03sILCFMOi40bmK9q")
    const docSnap = await getDoc(ref);

    if (docSnap.exists()) {
      const res = docSnap.data();
      console.log("Document data:", docSnap.data());
      setDocumentData(res)
     
    } else {
      // docSnap.data() will be undefined in this case
      
      console.log("No such document!");
     
    }

  }


  return (
    <>
      {
        user ? (
          <div>
            <button onClick={getDocument}>GetData</button>
            {
              documentData && ( // Render if documentData is not null
              <div>
                <h2>Document Data:</h2>
                <pre>Age = {documentData.Age}</pre>
              </div>
            )}
            
            <button onClick={addDatatoFirestore}>putData</button>
            <div><Logout /></div>
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