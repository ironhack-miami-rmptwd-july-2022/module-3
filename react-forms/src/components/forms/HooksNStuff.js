import React, { useEffect, useState } from "react";
import axios from "axios";
const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

export default function HooksNStuff() {
	const [fetching, setFetching] = useState(true);
	const [apartments, setApartments] = useState([]);
	const [pageTimer, setPageTimer] = useState(0);

	useEffect(() => {
		axios.get(apiURL).then((res) => {
			setApartments(res.data);
			setFetching(false);
		});

		// the [] as the 2nd argument for the useEffect acts as the determining factor of when this useEffect will run. (ie: When component loads, useEffect runs once. Empty array can't be targeted or upted so useEffect will not run again);
	}, []);

	useEffect(() => {
		console.log("Apartments just got updated!!!");

		// when setApartments gets called and apartments are updated because of this. This useEffect will automatically run.
	}, apartments);

	useEffect(() => {
		const pageTimeCounter = setInterval(() => {
			setPageTimer((prevTimer) => prevTimer + 1);
		}, 1000);

		return () => {
			clearInterval(pageTimeCounter);
			// this works as a component did unmount lifecycle method. It will return and clear the interval once the component is no-longer visible by the user.
		};
	}, []);

	// setTimeout(() => {
	//     // same structure as useEffect
	//     }, 1000)

	function updateApartmentData(aprtData) {
		// once this function is called and setApartments() has been utilized to update the apartments data in the state. The useEffect above with apartments as the 2nd argument will run on each call of the updateApartmentData() b/c it calls the setApartmnents() set in the state.
		setApartments(aprtData);
	}

	return (
		<div>
			<div>{apartments}</div>
			<h3>{pageTimer}</h3>
		</div>
	);
}

// import React, { Component } from 'react'

// export default class HooksNStuff extends React.Component {
//     state={}

//     componentWillMount() {

//     }

//     componentDidMount() {

//     }

//     componentDidUpdate() {

//     }

//     componentWillUpdate() {

//     }

//     componentWillUnmount() {

//     }

//   render() {
//     return (
//       <div>HooksNStuff</div>
//     )
//   }
// }
