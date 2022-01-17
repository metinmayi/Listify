import { createContext, useState } from "react";
import axios from "axios";
const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
	//Login state
	const [loggedIn, setLoggedIn] = useState();
	//ErrorMessage if login fails
	const [errorMessage, setErrorMessage] = useState("");
	//Login Function
	const loginFunction = async () => {
		const userName = document.getElementById("emailInput").value;
		const password = document.getElementById("passwordInput").value;
		try {
			const result = await axios(
				"https://listify-api-project.herokuapp.com/users"
			);
			const users = await result.data;
			const user = users.find((element) => element.username === userName);
			if (user && password === user.password) {
				setLoggedIn(true);
			} else {
				setLoggedIn(false);
				setErrorMessage("Wrong username and/or password");
				setTimeout(() => setErrorMessage(""), 2500);
			}
		} catch (error) {
			console.log(error);
		}
	};
	//Logout Function
	const logoutFunction = () => {
		setLoggedIn(false);
		console.log("False;");
	};
	return (
		<LoginContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				loginFunction,
				logoutFunction,
				errorMessage,
			}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContext;
