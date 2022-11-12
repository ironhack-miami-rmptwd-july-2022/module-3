import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import AllTheBeers from './components/allTheBeers';
import BeerDetails from './components/beerDetails';
import NewBeer from './components/newBeer';
import RandomBeer from './components/randomBeer';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/listOBeers" element={<AllTheBeers />} />
        <Route path="/randOBeer" element={<RandomBeer />} />
        <Route path="/new" element={ <NewBeer />} />
      </Routes>


    </div>
  );
}

export default App;
