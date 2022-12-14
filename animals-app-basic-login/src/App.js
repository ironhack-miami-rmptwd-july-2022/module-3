import "./App.css";
import Locations from "./components/locations";
import Animals from "./components/animals";
import AnimalDetails from "./components/animalDetails";
import CreateAnimal from "./components/createAnimal";
import Nav from "./components/Nav";
import { Link, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function App() {
	return (
		<div className="main">
			<UserProvider>
				{/* wrapping our entire App here so that we can use the context values anywhere within UserProvider */}
				<Nav />

				<Routes>
					<Route
						path="/locations"
						element={<Locations theUser={theUser} />}
					/>
					<Route
						path="/animals"
						element={<Animals theUser={theUser} />}
					/>
					<Route
						path="/animals/create"
						element={<CreateAnimal theUser={theUser} />}
					/>
					<Route
						path="/animals/:id"
						element={<AnimalDetails theUser={theUser} />}
					/>
				</Routes>
			</UserProvider>
		</div>
	);
}

export default App;
