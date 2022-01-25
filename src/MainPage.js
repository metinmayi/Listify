import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { useContext } from "react";
import LoginContext from "./context/LoginContext.js";
import { Navigate } from "react-router-dom";
const MainPage = () => {
	const { loggedIn } = useContext(LoginContext);
	return (
		<div className="Page">
			{!loggedIn && <Navigate to="/" />}
			<Header />
			<Main page="Shopping List" />
			<Footer></Footer>
		</div>
	);
};

export default MainPage;
