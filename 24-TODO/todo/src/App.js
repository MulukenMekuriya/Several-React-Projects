import { useState } from "react";
import "./App.css";

function App() {
	const [Todo, setTodo] = useState([]);
	return (
		<div className="App">
			<header className="App-header">
				<form action="">
					<div>
						<input type="text" /> <button>Add ToDo</button>
					</div>
					{/* This would be list of todos added from the state change */}
					<div></div>
				</form>
			</header>
		</div>
	);
}

export default App;
