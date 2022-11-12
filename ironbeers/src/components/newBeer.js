import "../App.css";
import axios from "axios";
import {useState} from "react";
import { useNavigate } from 'react-router-dom'

export default function NewBeer(props){

    const navigate = useNavigate();


    const [formState, setFormState] = useState({
        name: "",
        tagline: "",
        description: "",
        firstBrewed: "",
        brewerTips: "",
        attentuationLevel: "",
        contributedBy: ""
    })


    const setVal = (e, keyToSet) => {
        setFormState({...formState, [keyToSet]:e.target.value})
    }


    const submitForm = () =>{
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
            name: formState.name,
            tagline: formState.tagline,
            description: formState.description,
            first_brewed: formState.firstBrewed,
            brewers_tips: formState.brewerTips,
            attenuation_level: formState.attentuationLevel,
            contributed_by: formState.contributedBy
        })
        .then((successMsg)=>{
            console.log(successMsg);
            navigate('/listOBeers');

        })
        .catch((err)=>{
            console.log(err);
        })
    }



    return(
        <div>

            <div>
                Name:
                <input type="text" value={formState.name} onChange={(e)=>{setVal(e, "name")}}/>
            </div>

            <div>
                Tagline:
                <input type="text" value={formState.tagline} onChange={(e)=>{setVal(e, "tagline")}} />
            </div>

            <div>
                Description:
                <input type="text" value={formState.description} onChange={(e)=>{setVal(e, "description")}} />
            </div>

            <div>
                First Brewed
                <input type="text" value={formState.firstBrewed} onChange={(e)=>{setVal(e, "firstBrewed")}}/>
            </div>

            <div>
                Brewer Tips
                <input type="text" value={formState.brewerTips} onChange={(e)=>{setVal(e, "brewerTips")}} />
            </div>

            <div>
                Attentuation Level
                <input type="number" value={formState.attentuationLevel} onChange={(e)=>{setVal(e, "attentuationLevel")}}/>
            </div>

            <div>
                Contributed By
                <input type="text" value={formState.contributedBy} onChange={(e)=>{setVal(e, "contributedBy")}}/>
            </div>

            <button onClick={submitForm}>Save</button>
            
         
        </div>
    )
}

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text