import axios from "axios";
import { useState } from "react";

export default function Create({fetchAll}){

    const [title, setTitle]= useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState(0);

    const submitTheApartment = (e) =>{
        e.preventDefault();
        axios.post("https://ironbnb-m3.herokuapp.com/apartments", {
            title, 
            img, 
            pricePerDay: price,
        })
        .then((response)=>{
            console.log(response);
            setTitle("");
            setImg("");
            setPrice(0);
            fetchAll();
        })
      
    }

    const updateInputField = (e, updateFunctionToCall) =>{
        updateFunctionToCall(e.target.value);  
    }


    return(
        <div>
            <form>
                Add a New Apartment
                <p>
                    Title
                    <input type="text" value={title}
                     onChange={(e)=>{updateInputField(e,setTitle)}} />
                </p>
                <p>
                    Image
                    <input type="text" value={img} 
                    onChange={(e)=>{updateInputField(e,setImg)}}/>
                </p>
                <p>
                    Price
                    <input type="number" value={price}
                    onChange={(e)=>{updateInputField(e,setPrice)}} />
                </p>

                <button onClick={submitTheApartment}>Submit</button>

            </form>
        </div>
    )

}