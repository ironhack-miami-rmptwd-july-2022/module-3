import '../../App.css'
import { useParams } from 'react-router-dom'




function Details({prs}) {
    const { projectID } = useParams();
    const theProject = prs.find((eachPr)=>{
        return eachPr.id == projectID;
    })
  
  return (
    <div>
        <h2>{theProject.name}</h2>
        <p>Budget: {theProject.budget}</p>
        <p>year: {theProject.year}</p>
    </div>
  );
}
 
export default Details;