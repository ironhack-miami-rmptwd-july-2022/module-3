import {Link} from "react-router-dom";

export default function LittleAnimalList({animals}){

    const theAnimals = animals.map((eachAnimal)=>{
        return(
            <div key={eachAnimal._id}>
                <Link to={"/animals/"+eachAnimal._id}>
                {eachAnimal.name} - {eachAnimal.species}
                </Link>
            </div>
            )
    })



        if(animals.length > 0){
            return(
                <div>
            <p> Animals at this location: </p>
            <div>
                {theAnimals}
            </div>
                </div>

            )
        } else {
            return '';
        }
}