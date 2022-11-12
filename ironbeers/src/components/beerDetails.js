import "../App.css";

export default function BeerDetails({theBeer}){

    return(
        <div className="beerDetails">
         <img src={theBeer.image_url} />
         <div>
            <h2>{theBeer.name}</h2>
            <h6>{theBeer.tagline}</h6>
            <p>Created by {theBeer.contributed_by}</p>
         </div>
        </div>
    )
}