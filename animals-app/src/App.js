import logo from './logo.svg';
import './App.css';
import Locations from "./components/locations";
import Animals from "./components/animals";
import AnimalDetails from './components/animalDetails';
import CreateAnimal from './components/createAnimal';
import {Link, Route, Routes} from "react-router-dom"



function App() {
  return (
    <div className="main">
      <p><Link to="/locations">See Locations</Link></p>
      <p><Link to="/animals">See Animals</Link></p>
      <p><Link to="/animals/create">Add Animal</Link></p>
      

      <Routes>
        <Route path="/locations" element={ <Locations />}/>
        <Route path="/animals" element={ <Animals />}/>
        <Route path="/animals/create" element = {<CreateAnimal />} />
        <Route path="/animals/:id" element = {<AnimalDetails />} />
      </Routes>


    </div>
  );
}

export default App;
