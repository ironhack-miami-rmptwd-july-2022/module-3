import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function LocationsList({
	locations,
	fetchLocations,
	selectLocation,
	theUser,
}) {
	const deleteLocation = (theID) => {
		console.log(theID);
		axios
			.post("http://localhost:4200/locations/remove", { id: theID })
			.then((response) => {
				console.log(response);
				fetchLocations();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const listOfLocations = locations.map((eachLocation) => {
		return (
			<div key={eachLocation._id} className="location-list-item">
				<div
					onClick={() => {
						selectLocation(eachLocation);
					}}
				>
					<h3>{eachLocation.address}</h3>
					<p>
						{eachLocation.city}, {eachLocation.state}
					</p>
				</div>
				<button
					onClick={() => {
						deleteLocation(eachLocation._id);
					}}
				>
					Delete This Location
				</button>
			</div>
		);
	});

	return <div className="list-locations-container">{listOfLocations}</div>;
}
