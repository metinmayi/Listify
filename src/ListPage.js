import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginContext from "./context/LoginContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const ListPage = () => {
	const { loggedIn } = useContext(LoginContext);
	return (
		<div className="Page">
			{/* {!loggedIn && <Navigate to="/" />} */}
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default ListPage;
