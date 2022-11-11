import "../App.css";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";


export default function CountryDetails({countries}){
    const { countryID } = useParams();
    const theCountry = countries.find((eachCountry)=>{
        return eachCountry.alpha3Code.toLowerCase() === countryID
    });

    let borderNames = theCountry.borders.map((eachBorderCode)=>{

        

        return countries.find((eachCountry)=>{
            return eachCountry.alpha3Code === eachBorderCode
        }).name.common;



    })


    console.log(theCountry, borderNames);

    
    return(
        <div className="country-details">
            <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${theCountry.alpha2Code.toLowerCase()}.png`} />
            </div>
            <p>{theCountry.name.common}</p>
            <div>Area: {theCountry.area} km2</div>
            <div>Capital: {theCountry.capital[0]}</div>
            <br></br>
            <div>Borders:</div>
            <div>
                {theCountry.borders.map((eachBorder, i)=>{
                    return(
                    <div>
                        <Link to={`/countries/${eachBorder.toLowerCase()}`}>{borderNames[i]}</Link>
                    </div>
                        )
                })}
            </div>
        </div>
        
    )
}