// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// **********   Everything below this is for example only and not part of the original App.js file  **********************************

// Functional Component - These are mainly used for display of information and will be the main type of component that you will be utilizing.

import React from "react";

// you can export in the same line as you declare the function instead of exporting it at the bottom of the file.
export default function App() {
	function sayHiWorld() {
		return <p>Hi World!</p>;
	}

	// for any function that returns html elements, the return can only be 1 html element. This means that you will usually have to wrap eveything that you return in some wrapper element like a <div>  [content here]   </div> or utilize the shortcut <>  [content here]  </>
	return (
		<div>
			<div>App</div>
			{/* <p>{sayHiWorld()}</p> */}
			{sayHiWorld()}
		</div>
	);
	// if you want a function to be called upon return, then include the ().
	// for onClick or passing props, you usually don't use the () when calling the function
}

// ============================================================================

//

// // // Class Component - This is the component that was used prior to hooks in order to grab and manipulate user data like when loging in or filling out some type of form.
// import React, { Component } from "react";

// export default class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			blah: "name",
// 			favNumber: 8,
// 		};
// 	}

// 	randomNum = () => Math.floor(Math.random() * 354266780);

// 	giveMeBlah() {
// 		let result = this.state.blah;
// 		let num = this.randomNum();

// 		if (num % 3 === 0) {
// 			result = "Updated Blah";
// 		} else {
// 			result = "No Multiple of 3!!";
// 		}

// 		this.setState({ blah: result, favNumber: num });
// 	}

// 	theDataFromChild(childData) {}

// 	render() {
// 		console.log("This is my log in the class component for App");

// 		return (
// 			<div>
// 				{/* {this.state.user ? (
// 					<a href="/logout">LogOut</a>
// 				) : (
// 					<a href="/login">LogIn</a>
// 				)} */}
// 				<h1>Class App</h1>
// 				{this.state.blah === "name" && this.giveMeBlah()}
// 				<p>name: {this.state.blah}</p>
// 				<p>favNum: {this.state.favNumber}</p>
// 				{/* <ListOfOddJobs theBlahData={this.state} /> */}
// 				{/* this is how you would have to call the data being passed in props to the child component ListOfOddJobs from the parant component App {this.props.theBlahData.name} */}
// 			</div>
// 		);
// 	}
// }
