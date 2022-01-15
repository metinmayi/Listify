import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import Missing from "./Missing";
import ShoppingListPage from "./ShoppingListPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/shoppinglist" element={<ShoppingListPage />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
