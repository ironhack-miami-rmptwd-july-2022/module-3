import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';



export default function AnimalDetails(){
    const {id} = useParams();
    const [theAnimal, setTheAnimal] = useState({});
   
    const fetchAnimalDetails = ()=>{
        axios.get("http://localhost:4200/animals/"+id)
        .then((response)=>{
            setTheAnimal(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        fetchAnimalDetails();
    },[])


    return(
        <div className='animals-list-component'>
            <div className='animal-list'>
            <h3>{theAnimal.name}</h3>
                <p>{theAnimal.color}</p>
                <p>{theAnimal.species}</p>
                <p>{theAnimal.sex}</p>
                <img src={theAnimal.image} />
            </div>
            
        </div>
    )
}