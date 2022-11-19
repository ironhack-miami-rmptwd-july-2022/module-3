import logo from './logo.svg';
import './App.css';
import Locations from "./components/locations";
import Animals from "./components/animals";
import AnimalDetails from './components/animalDetails';
import CreateAnimal from './components/createAnimal';
import {Link, Route, Routes} from "react-router-dom"
import SignupOrLogin from './components/signup';
import {useState, useEffect} from 'react';
import axios from 'axios';




function App() {

  const [theUser, setTheUser] = useState(null);

  const getUserInfo = () =>{
    axios.get("http://localhost:4200/serializeuser", {withCredentials: true})
    .then((response)=>{
      setTheUser(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getUserInfo();
  }, [])


  const logout = () =>{
    axios.post("http://localhost:4200/logout",{}, {withCredentials: true})
    .then((response)=>{
      console.log(response.data)
      if(response.data.message === "successfully logged out")setTheUser(null);
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  return (
    <div className="main">

      {!theUser && <div className='login-signup-container'>
        <SignupOrLogin action="signup" getUserInfo={getUserInfo} />
        <SignupOrLogin action="login" getUserInfo={getUserInfo} />
      </div>}

      {theUser && 
        <div>
          <button onClick={logout}
          >Logout</button>
      </div>}

      <p><Link to="/locations">See Locations</Link></p>
      <p><Link to="/animals">See Animals</Link></p>
      <p><Link to="/animals/create">Add Animal</Link></p>

      

      <Routes>
        <Route path="/locations" element={ <Locations theUser={theUser} />}/>
        <Route path="/animals" element={ <Animals theUser={theUser}  />}/>
        <Route path="/animals/create" element = {<CreateAnimal theUser={theUser}  />} />
        <Route path="/animals/:id" element = {<AnimalDetails theUser={theUser}  />} />
      </Routes>


    </div>
  );
}

export default App;
