import React from "react";

export default function Counter(props) {
	console.log({ props });

	return (
		<div className="display__counter-container">
			<h4>Current Count: {props.counter}</h4>
			<br />
			<div>
				<button onClick={() => props.updateCounter(props.counter - 1)}>
					{" "}
					-{" "}
				</button>
				<button onClick={() => props.updateCounter(props.counter + 1)}>
					{" "}
					+{" "}
				</button>
			</div>
			<button onClick={() => props.resetCounter(props.resetCounter())}>
				{" "}
				Reset Counter{" "}
			</button>
		</div>
	);
}
