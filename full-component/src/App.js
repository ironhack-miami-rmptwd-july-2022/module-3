import logo from "./logo.svg";
import "./App.scss";
import TaskLists from "./components/task-list/TaskLists";

function App() {
	return (
		<div className="App">
			<TaskLists currentUser={{ username: "Marcos", online: true }} />
		</div>
	);
}

export default App;
