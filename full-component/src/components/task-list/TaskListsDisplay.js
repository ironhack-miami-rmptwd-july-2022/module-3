import React from "react";
import "./taskList.scss";

// The display js file should be used to recieve the data from the parent in this component folder and only display the inormation from it.
export default function TaskListsDisplay({ tasks }) {
	console.log({ tasks });

	function displayTasks() {
		return tasks.length ? (
			tasks.map((task) => {
				return (
					<div className="task__list--container">
						<h3>Title: {task.title}</h3>
						<h3>Description: {task.description}</h3>
						<h3>
							Complete: {task.completed ? "[X]" : "[]"}{" "}
							{/* Need to shared component for checkbox */}
						</h3>
					</div>
				);
			})
		) : (
			<h3 className="task__error task__error--severity-1">
				No Tasks To Display
			</h3>
		);
	}

	return <div>{displayTasks()}</div>;
}
