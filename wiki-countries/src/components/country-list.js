import "../App.css";
import { Link } from "react-router-dom";

export default function CountryList({countries}){
    return(
        <div className="countries-list">
            {countries.map((eachCountry)=>{
                return(
                <div key={eachCountry.alpha2Code} className="individual-country-box">
                    <Link to={`/countries/${eachCountry.alpha3Code.toLowerCase()}`}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} />
                    <p>{eachCountry.name.common}</p>
                    </Link>
                </div>
                )
            })}
        </div>
    )

}