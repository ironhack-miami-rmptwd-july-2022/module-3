import React from "react";

export default function PokeListCard(props) {
	// the child receives props from the parent (props is an object that has key value pairs of which the parent component may add to props for the shild component to utilize);
	console.log({ props });

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			className="poke__list-link"
			target="_blank"
			href={props.pokeBlah.url}
			rel="noreferrer"
		>
			<div className="poke__list-card">{props.pokeBlah.name}</div>
		</a>
	);
}
