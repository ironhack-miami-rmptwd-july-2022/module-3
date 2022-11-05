import React, { useState } from "react";

export default function AddressForm(props) {
	console.log({ props });

	// const [zip, setZip] = useState(0);
	// const [city, setCity] = useState("");
	// const [state, setStateInput] = useState("");
	// const [streetAddress, setStreetAddress] = useState("");

	// const [addressFormData, setAddressFormData] = useState({
	// 	streetAddress: "",
	// 	city: "",
	// 	state: "",
	// 	zip: 0,
	// });

	// function getFormData() {
	// 	console.log({ addressFormData });
	// }

	const handleChange = (event) => {
		// console.log({ event: event.target });
		event.preventDefault();

		// setAddressFormData({
		// 	...addressFormData,
		// 	[event.target.name]: event.target.value,
		// });
		props.updateUserShippingInfo({
			...props.userShippingInfo,
			[event.target.name]: event.target.value,
		});
	};

	return (
		<div>
			<label>
				Street Address:{" "}
				<input
					name="streetAddress"
					type="text"
					value={props.userShippingInfo.streetAddress}
					// value={addressFormData.streetAddress}
					// onChange={(e) => setStreetAddress(e.target.value)}
					onChange={(e) => handleChange(e)}
				/>
			</label>{" "}
			<label>
				Zip:{" "}
				<input
					name="zip"
					type="number"
					value={props.userShippingInfo.zip}
					// value={addressFormData.zip}
					// onChange={(e) => setZip(e.target.value)}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<br />
			<br />
			<label>
				City:{" "}
				<input
					name="city"
					type="text"
					value={props.userShippingInfo.city}
					// value={addressFormData.city}
					// onChange={(e) => setCity(e.target.value)}
					onChange={(e) => handleChange(e)}
				/>
			</label>{" "}
			<label>
				State:{" "}
				<input
					name="state"
					type="text"
					value={props.userShippingInfo.state}
					// value={addressFormData.state}
					// onChange={(e) => setStateInput(e.target.value)}
					onChange={(e) => handleChange(e)}
				/>
			</label>
			<br />
			<br />
			{/* <button onClick={getFormData}> Click Me </button> */}
		</div>
	);
}
