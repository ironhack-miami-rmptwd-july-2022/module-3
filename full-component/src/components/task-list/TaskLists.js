import React, { useState } from "react";
import TaskListsDisplay from "./TaskListsDisplay";

// This file that has the camel case naming, would be the main file called by other components.

// This is the file that houses all the functionality and the state of the component.
export default function TaskLists({ currentUser }) {
	// Each parent component should receive the user data in order to allow for proper auth and display options based on logged in user if needed.
	const [tasks, setTask] = useState([
		{ title: "blah", description: "some blah", completed: true },
	]);

	const taskActions = {
		create: () => "",
		read: () => "",
		update: () => "",
		delete: () => "",
	};

	console.log({ currentUser, tasks });

	return (
		<div className="task">
			<TaskListsDisplay tasks={tasks} />
		</div>
	);
}
