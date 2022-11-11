import { useParams } from "react-router-dom"

export default function Details({allTheApts}){
    let {apartmentID} = useParams();
    const theApartment = allTheApts.find((eachApt)=>{
        return eachApt._id === apartmentID;
    })
    console.log(theApartment);

    return(
        <div>
            <h2>{theApartment.title}</h2>
            <p>Price Per Day: {theApartment.pricePerDay}</p>
            <img src={theApartment.img} />

        </div>
    )

}