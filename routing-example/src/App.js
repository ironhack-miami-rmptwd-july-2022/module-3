import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";  
import AboutUs from './components/about-us/about-us';
import OurClients from './components/our-clients/OurClients';
import Navbar from './components/nav/nav';
import Projects from './components/projects/projects';
import Details from './components/details/details';
import { useState } from "react";



function App() {
  const [projects, setProjects] = useState([
    {name: "Nordic Water Regenration Project", year: 2019, budget: "100M+", id: 1},
    {name: "Hurricane Relief", year: 2021, budget: "50M+", id: 2},
    {name: "Disabled Animal Rescue Modernization Tech Initiative", year: 2018, budget: "200M+", id:3},
    {name: "Unserserved Communities of South Florida Restoraction Project", year: 2017, budget: "20M+", id:4},
  ]);

  const [theWord, setTheWord] = useState("hello");

  const wordChange = () =>{
    setTheWord("goodBye");
  }


  return (
    <div className="main">

    <h2>the word is: {theWord}</h2>
    <button onClick={wordChange}>change the word</button>
    

      <Navbar />
      <Routes>
        <Route element={<AboutUs />} path = "/about-us" />
        <Route element={<OurClients/>} path = "/our-clients" />
        <Route element={<Projects prs={projects} />} path="/projects" /> 
        <Route element={<Details prs={projects} />} path="/details/:projectID" />

      </Routes>





    </div>
  );
}

export default App;
