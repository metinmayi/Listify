import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import Missing from "./Missing";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
