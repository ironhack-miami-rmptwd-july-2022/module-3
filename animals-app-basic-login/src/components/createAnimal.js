import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAnimal() {
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		name: "",
		species: "",
		sex: "",
		color: "",
		image: "",
	});

	const updateInput = (e, thingToUpdate) => {
		setFormState({ ...formState, [thingToUpdate]: e.target.value });
	};

	const submitForm = () => {
		axios
			.post("http://localhost:4200/animals/create", {
				name: formState.name,
				species: formState.species,
				sex: formState.sex,
				color: formState.color,
				image: formState.image,
				vaccinated: true,
				available: true,
			})
			.then((response) => {
				console.log(response);
				navigate("/animals");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<div>
				Name:
				<input
					type="text"
					value={formState.name}
					onChange={(e) => {
						updateInput(e, "name");
					}}
				/>
			</div>
			<div>
				Species:
				<input
					type="text"
					value={formState.species}
					onChange={(e) => {
						updateInput(e, "species");
					}}
				/>
			</div>
			<div>
				Sex:
				<input
					type="text"
					value={formState.sex}
					onChange={(e) => {
						updateInput(e, "sex");
					}}
				/>
			</div>
			<div>
				Color:
				<input
					type="text"
					value={formState.color}
					onChange={(e) => {
						updateInput(e, "color");
					}}
				/>
			</div>
			<div>
				Image:
				<input
					type="text"
					value={formState.image}
					onChange={(e) => {
						updateInput(e, "image");
					}}
				/>
			</div>

			<button onClick={submitForm}>submit</button>
		</div>
	);
}
