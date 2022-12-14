import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import SignupOrLogin from "./signup";

export default function Nav() {
	const { theUser, logout } = useContext(UserContext);

	return (
		<div>
			{!theUser && (
				<div className="login-signup-container">
					<SignupOrLogin action="signup" getUserInfo={getUserInfo} />
					<SignupOrLogin action="login" getUserInfo={getUserInfo} />
				</div>
			)}

			{theUser && (
				<div>
					<button onClick={logout}>Logout</button>
				</div>
			)}

			<p>
				<Link to="/locations">See Locations</Link>
			</p>
			<p>
				<Link to="/animals">See Animals</Link>
			</p>
			<p>
				<Link to="/animals/create">Add Animal</Link>
			</p>
		</div>
	);
}
