import "../App.css";
import {useParams} from "react-router-dom";
import axios from "axios";
import LittleAnimalList from "./littleAnimalList";

export default function LocationDetails({locations}){
    const {locationID} = useParams();

    const theLocation = locations.find((location)=>{
        return location._id == locationID
    })
    console.log(theLocation);

   


    console.log(locationID)
    return(
        <div className="loc-det-cont">
            {theLocation.address}
            <p>{theLocation.city}, {theLocation.state}</p>
            <LittleAnimalList animals={theLocation.animals} />
        </div>
    )

}