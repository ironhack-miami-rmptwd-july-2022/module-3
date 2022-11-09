import '../../App.css';
import { Link } from "react-router-dom";     // <== IMPORT


function Projects({prs}) {
  return (
    <div className="projects">
        {prs.map((eachProject)=>{
            return<div key={eachProject.id}>
                <Link to={`/details/${eachProject.id}`}>
                <h2>{eachProject.name}</h2>
                </Link>
                <hr/>
                </div>
        })}
    </div>
  );
}
 
export default Projects;