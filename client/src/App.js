import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/Button/Button";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
				<Button className="update-button">Update</Button>
			</BrowserRouter>
		</div>
	);
}

export default App;
