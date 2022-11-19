import "../App.css";
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import LittleAnimalList from "./littleAnimalList";
import EditLocation from "./editLocation";


export default function LocationDetails({theLocation, fetchLocations, theUser}){
    const {locationID} = useParams();

    const [editing, setEditing] = useState(false);

    const edit = () =>{
        setEditing(true);
    }

    const stopEditing = () =>{
        setEditing(false);
    }

    return(
        <div className="loc-det-cont">
            {editing && <EditLocation fetchLocations={fetchLocations} stopEditing={setEditing} location={theLocation} />}

            {!editing && <div>
            <p><button onClick={edit}>edit</button></p>
            {theLocation.address}
            {theLocation.apartmentNumber && <p>Apartment Number {theLocation.apartmentNumber}</p>}
            <p>{theLocation.city}, {theLocation.state}</p>
            <p>{theLocation.zip}</p>
            <LittleAnimalList animals={theLocation.animals} />
            </div>}
        </div>
    )

}