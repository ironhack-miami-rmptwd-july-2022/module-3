// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import PokeListCard from "./components/pokemon/PokeListCard";

function App() {
	const [pokemon, setPokemon] = useState(() => []);

	const getApiData = async () => {
		const res = await axios.get(
			"https://pokeapi.co/api/v2/pokemon?offset=0&limit=200"
		);
		console.log({ res: res.data, pokemon, state: React.state });

		return setPokemon((prevState) => {
			// return [...prevState.pokemon, ...res.data]
			console.log({ prevState, pokemon });
			return res.data.results;
		});
	};

	// const getApiData = () => {
	// 	axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
	// 		console.log({ myData: res.data });
	// 	}).catch(err => console.log({err}))
	// };
	console.log({ pokemon, state: React.state });

	const displayPokemon = () => {
		return pokemon.map((poke, i) => {
			return <PokeListCard pokeBlah={poke} key={i} />;
		});
	};

	return (
		<div className="App">
			<h3>Click to Get API Data</h3>
			<button onClick={() => getApiData()}>Click For Data</button>
			<br />
			<br />
			<div className="pokemon__list-container">{displayPokemon()}</div>
		</div>
	);
}

export default App;
