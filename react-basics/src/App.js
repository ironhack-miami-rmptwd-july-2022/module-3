// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import PokeListCard from "./components/pokemon/PokeListCard";
import Counter from "./components/general/Counter";

function App() {
	const [pokemon, setPokemon] = useState(() => []);
	const [counter, setCounter] = useState(() => 0);

	const getApiData = async () => {
		const res = await axios.get(
			"https://pokeapi.co/api/v2/pokemon?offset=0&limit=200"
		);
		// console.log({ res: res.data, pokemon, state: React.state });

		return setPokemon((prevState) => {
			// return [...prevState.pokemon, ...res.data]
			// console.log({ prevState, pokemon });
			return res.data.results;
		});
	};

	// const getApiData = () => {
	// 	axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
	// 		console.log({ myData: res.data });
	// 	}).catch(err => console.log({err}))
	// };
	// console.log({ pokemon, state: React.state });

	const displayPokemon = () => {
		return pokemon.map((poke, i) => {
			return (
				<div>
					<PokeListCard pokeBlah={poke} key={i} />
				</div>

				// return (
				// 	<div>
				// 		<a
				// 			className="poke__list-link"
				// 			target="_blank"
				// 			// href={props.pokeBlah.url}
				// 			href={poke.url}
				// 			rel="noreferrer"
				// 		>
				// 			{/* <div className="poke__list-card">{props.pokeBlah.name}</div> */}
				// 			<div className="poke__list-card">{poke.name}</div>
				// 		</a>
				// 	</div>
				// )
			);
		});
	};

	function setCurrentCounter(updatedNumberForCounter) {
		return setCounter((prevCounterInState) => {
			// return [...prevCounterInState.pokemon, ...res.data]
			console.log({
				prevCounterInState,
				counter,
				updatedNumberForCounter,
			});

			return updatedNumberForCounter < 0 &&
				!(
					updatedNumberForCounter === prevCounterInState + 1 ||
					updatedNumberForCounter === prevCounterInState + 1
				)
				? prevCounterInState
				: updatedNumberForCounter;
			// return updatedNumberForCounter;
		});
	}

	function resetCounter() {
		return setCounter(() => 0);
	}

	function displayMainBodyOfHtml() {
		return (
			<div>
				<div></div>

				<div>
					<h3>Click to Get API Data</h3>
					<button onClick={() => getApiData()}>Click For Data</button>
					<br />
					<br />
					<div className="pokemon__list-container">
						{displayPokemon()}
					</div>
				</div>

				{/* <div className="display__counter-container">
					<h4>
						Current Count: <span>{"variableOfANumber"}</span>
					</h4>
				</div> */}
				<Counter
					counter={counter}
					updateCounter={setCurrentCounter}
					resetCounter={resetCounter}
				/>
			</div>
		);
	}

	return (
		<div className="App">
			<nav></nav>

			{/* <div>
				<div></div>

				<div>
					<h3>Click to Get API Data</h3>
					<button onClick={() => getApiData()}>Click For Data</button>
					<br />
					<br />
					<div className="pokemon__list-container">
						{displayPokemon()}
					</div>
				</div>

				<div className="display__counter-container">
					<h4>
						Current Count: <span>{"variableOfANumber"}</span>
					</h4>
				</div>
			</div> */}

			{/* This is an example of what you are doing when you create a component. You call a function and it displays the html that you want rendered where you call it */}
			{displayMainBodyOfHtml()}

			<footer></footer>
		</div>
	);
}

export default App;
