// import { getDatabase, ref, set } from 'firebase/database';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from './firebase'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter , Routes , Route , Link} from 'react-router-dom';


// const db = getDatabase(app);

// const auth = getAuth(app);


function App() {
  // const putData = () =>{
  //   set(ref(db , "users/a") , {
  //     id:1,
  //     name: "Aarav",
  //     age:10
  //   })
  // }

  // const signup = () => {
  //   createUserWithEmailAndPassword(auth, "arav@gmail.com", "Aarav321@").then((value) => console.log(value))
  // }


  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
