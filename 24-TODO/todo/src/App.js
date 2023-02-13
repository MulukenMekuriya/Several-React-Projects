import { useState } from "react";
import "./App.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [inputeTodos, setInputeTodos] = useState("");

	const handleAddTodo = () => {
		setTodos([...todos, inputeTodos]);
		setInputeTodos("");
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="text-center mb-4">Todo List</h1>
				<div>
					<input
						type="text"
						value={inputeTodos}
						onChange={(e) => setInputeTodos(e.target.value)}
					/>
					<button onClick={handleAddTodo}>Add Todo</button>
				</div>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
