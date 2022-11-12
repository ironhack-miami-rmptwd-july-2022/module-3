

export default function LittleAnimalList({animals}){

    const theAnimals = animals.map((eachAnimal)=>{
        return(<div key={eachAnimal._id}>{eachAnimal.name} - {eachAnimal.species}</div>)
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