import "../App.css"
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


export default function AnimalsList(){

    const [animals, setAnimals] = useState([]);

    const fetchAnimals = ()=>{
        axios.get("http://localhost:4200/animals")
        .then((response)=>{
            console.log(response);
            setAnimals(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchAnimals();
    }, [])


    const listOfAnimals = animals.map((eachAnimal)=>{
        return(
            <div key={eachAnimal._id} className="animal-list">
                <Link to={"/animals/"+eachAnimal._id}>
                <h3>{eachAnimal.name}</h3>
                <p>{eachAnimal.color}</p>
                <p>{eachAnimal.species}</p>
                <p>{eachAnimal.sex}</p>
                </Link>
            </div>
        )
    })
    
 

    return(
        <div className="animals-list-component">
            {listOfAnimals}
        </div>
    )
}