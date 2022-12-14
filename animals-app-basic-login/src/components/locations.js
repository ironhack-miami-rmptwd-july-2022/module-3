import "../App.css";
import LocationsList from "./locationsList";
import LocationDetails from "./locationDetails";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CreateLocation from "./createLocation";
import UserContext from "../contexts/UserContext";

export default function Locations() {
	const { theUser } = useContext(UserContext);

	const [selectedLocation, setSelectedLocation] = useState(null);
	const [locations, setLocations] = useState([]);

	const fetchLocations = () => {
		axios
			.get("http://localhost:4200/locations")
			.then((response) => {
				setLocations(response.data.reverse());
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchLocations();
	}, []);

	return (
		<div className="locations-comp">
			<LocationsList
				locations={locations}
				fetchLocations={fetchLocations}
				selectLocation={setSelectedLocation}
				theUser={theUser}
			/>
			<CreateLocation fetchLocations={fetchLocations} theUser={theUser} />

			{selectedLocation && (
				<LocationDetails
					theLocation={selectedLocation}
					fetchLocations={fetchLocations}
					theUser={theUser}
				/>
			)}
		</div>
	);
}
