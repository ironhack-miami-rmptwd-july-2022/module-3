import "../App.css";
import {Link} from "react-router-dom";
import Create from "./create";

export default function Apartments({allTheApartments, fetchAll}){
    return(
        <div>
            <div className="apartment-list">
            {allTheApartments.map((eachApt)=>{
                return(
                    <div key={eachApt.title}>
                        <Link to={"/apartments/"+eachApt._id}>
                        <h2>
                        {eachApt.title}
                        </h2>            
                        </Link>
                    </div>

                )

            })}
              </div>
              <div className="create-container">
                <Create fetchAll={fetchAll} />
              </div>
            
        </div>
    )

}