import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import Missing from "./Missing";
import { LoginProvider } from "./context/LoginContext";

import RegisterPage from "./RegisterPage";

function App() {
	return (
		<div className="App">
			<LoginProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/mainPage" element={<MainPage />} />
						<Route path="/registerPage" element={<RegisterPage />} />
						<Route path="*" element={<Missing />} />
					</Routes>
				</BrowserRouter>
			</LoginProvider>
		</div>
	);
}

export default App;
