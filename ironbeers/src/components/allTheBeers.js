import "../App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import BeerDetails from "./beerDetails";

export default function AllTheBeers(){
    const [beers, setBeers] = useState([]);
    const [visibleBeers, setVisibleBeers] = useState([]);
    

    const fetchAllBeers = () =>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response)=>{
            setBeers(response.data);
            setVisibleBeers(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchAllBeers();
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const updateSearchTerm = (e)=>{
        setSearchTerm(e.target.value);

        let relevantBeers = beers.filter((eachBeer)=>{
            return eachBeer.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setVisibleBeers(relevantBeers);
    }


    const listOfBeers = visibleBeers.map((eachBeer)=>{
        return(<BeerDetails key={eachBeer._id} theBeer={eachBeer} />)
    })



    return(
        <div>
        Search: 
        <input value={searchTerm} onChange={updateSearchTerm} />
         {listOfBeers}
        </div>
    )
}