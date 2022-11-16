import "../App.css";
import {useState} from "react";
import axios from "axios";

export default function CreateLocation(props){

    const [formState, setFormState] = useState({
        address: "", 
        zip: 0,
        state: "",
        aptNumber: 0,
        city: "",
    });


    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const sendLocationInfo = ()=>{
        console.log(formState);
        axios.post("http://localhost:4200/locations/create",{
            address: formState.address,
            zip: formState.zip,
            state: formState.state,
            city: formState.city,
            apartmentNumber: formState.aptNumber
        }).then((response)=>{

            props.fetchLocations();

        }).catch((err)=>{
            console.log(err);
        })
    }


    



    return(
        <div>
            <h3>Add a Location</h3>
            <div>
              Address
            <input type="text" value={formState.address} onChange={(e)=>{updateInput(e,"address")}} />
            </div>
            <div>
              Apartment Number
            <input type="number" value={formState.aptNumber} onChange={(e)=>{updateInput(e,"aptNumber")}} />
            </div>
            <div>
              Zip
            <input type="number" value={formState.zip} onChange={(e)=>{updateInput(e,"zip")}} />
            </div>
            <div>
              City
            <input type="text" value={formState.city} onChange={(e)=>{updateInput(e,"city")}} />
            </div>
            <div>
              State
            <input type="state" value={formState.state} onChange={(e)=>{updateInput(e,"state")}} />
            </div>
            <button onClick={sendLocationInfo} >Submit</button>
        </div>
    )
}

