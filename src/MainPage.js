import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { useContext } from "react";
import LoginContext from "./context/LoginContext.js";
import { Navigate } from "react-router-dom";
const MainPage = () => {
	const { logoutFunction } = useContext(LoginContext);
	const { loggedIn } = useContext(LoginContext);
	return (
		<>
			{!loggedIn && <Navigate to="/" />}
			<Header logoutFunction={logoutFunction} />
			<Main />
			<Footer></Footer>
		</>
	);
};

export default MainPage;
