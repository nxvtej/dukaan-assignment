import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div style={{ display: "flex ", justifyContent: "space-between" }}>
				<div style={{ background: "red" }}>hi there</div>
				<div style={{ background: "yellow" }}>hey commign </div>
				<div style={{ background: "pink" }}>yeah baby</div>
			</div>
		</>
	);
}

export default App;
