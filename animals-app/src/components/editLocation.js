
import "../App.css";
import axios from "axios"
import {useState} from 'react';

export default function EditLocation({location, stopEditing, fetchLocations}){
    
    const endEdit = () =>{
        stopEditing()
    }


    const [formState, setFormState] = useState(location);

    const updateInput = (e, thingToUpdate)=>{
        setFormState({...formState, [thingToUpdate]: e.target.value})
    }


    const submitForm = () =>{
        axios.post("http://localhost:4200/locations/edit/"+location._id, {
            address: formState.address,
            state: formState.state, 
            city: formState.city,
            apartmentNumber: formState.apartmentNumber,
            zip: formState.zip
        }).then((response)=>{

            fetchLocations();


        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div> 
           <div>
            <p><button onClick={endEdit}>X</button></p>

            <div>
            Address:
            <input value={formState.address} onChange={(e)=>{updateInput(e, "address")}} />
            </div>
            

            <p>Apartment Number 
                <input value={formState.apartmentNumber} onChange={(e)=>{updateInput(e, "apartmentNumber")}}/>
            </p>
            
            
            <div>
                City
                <input value={formState.city} onChange={(e)=>{updateInput(e, "city")}}/>
            </div>
            
            <div>
                State
                <input value={formState.state} onChange={(e)=>{updateInput(e, "state")}} />
            </div>

             
            <p>
                Zip
                <input value={formState.zip} onChange={(e)=>{updateInput(e, "zip")}} />
            </p>
            </div>

            <button onClick={submitForm}>Submit</button>
        </div>
    )
}