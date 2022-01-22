import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState({
		red: "",
		yellow: "",
		green: "",
	});

	const handleClick = (e) => {
		const newColor = { [e.target.id]: "selected" };
		setColor(newColor);
	};

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="trafficBody">
				<div
					id="red"
					className={"light " + color.red}
					onClick={handleClick}></div>
				<div
					id="yellow"
					className={"light " + color.yellow}
					onClick={handleClick}></div>
				<div
					id="green"
					className={"light " + color.green}
					onClick={handleClick}></div>
			</div>
		</div>
	);
};

export default Home;
