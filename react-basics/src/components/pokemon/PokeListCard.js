import React from "react";

export default function PokeListCard(props) {
	console.log({ props });

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a
			className="poke__list-link"
			target="_blank"
			href={props.pokeBlah.url}
		>
			<div className="poke__list-card">{props.pokeBlah.name}</div>
		</a>
	);
}
