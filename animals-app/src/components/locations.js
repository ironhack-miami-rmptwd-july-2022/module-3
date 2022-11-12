import "../App.css";
import LocationsList from "./locationsList";
import LocationDetails from "./locationDetails"
import {Routes, Route} from "react-router-dom"
import axios from "axios";
import {useEffect, useState} from "react";


export default function Locations(){

    const [locations, setLocations] = useState([]);

    const fetchLocations = () =>{
        axios.get("http://localhost:5000/locations")
        .then((response)=>{
            setLocations(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchLocations();
    }, [])



    return(<div className="locations-comp">
            <LocationsList locations={locations} />
            <Routes>
                <Route path="/locations/:locationID" element={ <LocationDetails locations={locations} />} />
            </Routes>
           
        </div>);
}