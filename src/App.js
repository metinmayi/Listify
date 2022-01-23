import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import Missing from "./Missing";
import { LoginProvider } from "./context/LoginContext";
import RegisterPage from "./RegisterPage";
import ListPage from "./ListPage";

function App() {
	return (
		<LoginProvider>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/mainPage" element={<MainPage />} />
						<Route path="/registerPage" element={<RegisterPage />} />
						<Route path="/listPage" element={<ListPage />} />
						<Route path="*" element={<Missing />} />
					</Routes>
				</BrowserRouter>
			</div>
		</LoginProvider>
	);
}

export default App;
