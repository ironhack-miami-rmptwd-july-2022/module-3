import "../App.css";
import {useState, useEffect} from "react";
import axios from "axios";
import BeerDetails from "./beerDetails";

export default function RandomBeer(){
    const [theBeer, setTheBeer] = useState();

    const fetchRandomBeer = () =>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response)=>{
            setTheBeer(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchRandomBeer();
    }, []);

    return(
        <div>
         {theBeer && <BeerDetails theBeer={theBeer} />}
         {/* this is because for the first split second when the page loads the beer is not defined yet until we do the api call */}
         {/* so were saying if the beer exists, show thebeer.name */}
        </div>
    )
}