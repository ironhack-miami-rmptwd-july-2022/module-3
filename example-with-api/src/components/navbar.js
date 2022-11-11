import "../App.css";
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/apartments">Apartments</Link>
        </div>
    )

}