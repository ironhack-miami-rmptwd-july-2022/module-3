import "../App.css";

import {Link} from "react-router-dom";


export default function LocationsList({locations}){

   


    const listOfLocations = locations.map((eachLocation)=>{
        return(<div key={eachLocation._id} className="location-list-item">
            <Link to={"/locations/"+eachLocation._id}>
            <h3>{eachLocation.address}</h3>
            <p>{eachLocation.city}, {eachLocation.state}</p>
            </Link>
            </div>)

    })


return(
    <div className="list-locations-container">
       {listOfLocations}
    </div>
)
}
