import React, { useState } from "react";

function TestCounter() {
	const [counter, setCounter] = useState(() => 0);

	const counterActions = {
		create: resetCounter(),
		read: getCounter(),
		update: (updateValue) => updateCounter(updateValue),
		delete: resetCounter(),

		filter: (params) => filterContent(params),
	};

	function resetCounter() {
		return setCounter(() => 0);
	}

	function updateCounter(newValue) {
		return setCounter(() => newValue);
	}

	function getCounter() {
		return counter;
	}

	function filterContent(params) {
		return counterActions.read().filter((elem) => elem);
	}

	return (
		<div>
			<h3>Counter: {counterActions.getCounter()}</h3>
		</div>
	);
}
