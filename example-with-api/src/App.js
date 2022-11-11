import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Apartments from './components/apartments';
import Home from './components/home';
import Details from './components/details';
import Navbar from './components/navbar';
import {Route, Routes} from "react-router-dom";
import axios from "axios";

function App() {

  const [apartments, setApartments] = useState([]);


  const fetchAllApartments = () =>{
    axios
    .get("https://ironbnb-m3.herokuapp.com/apartments")
    .then((response) => {
      console.log('response.data', response.data);
      setApartments(response.data)
    });

  }

  useEffect(() => {  
    fetchAllApartments();
  }, [] );
  


  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments allTheApartments={apartments} fetchAll={fetchAllApartments} />} />
        <Route path="/apartments/:apartmentID" element={<Details allTheApts={apartments} />} />
      </Routes>

      
    </div>
  );
}

export default App;
