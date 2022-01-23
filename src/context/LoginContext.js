import { createContext, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
	//State if your registration was successfull or not
	const [registered, setRegistered] = useState();
	//Errormessage if registration fails
	const [registrationError, setRegistrationError] = useState("");
	//Login state
	const [loggedIn, setLoggedIn] = useState(false);
	//ErrorMessage if login fails
	const [errorMessage, setErrorMessage] = useState("");
	//Stores the name of the logged in user
	const [loggedinUser, setLoggedinUser] = useState("");

	//Login Function
	const loginFunction = async () => {
		const username = document.getElementById("emailInput").value.toLowerCase();
		const password = document.getElementById("passwordInput").value;
		//Requests a login
		try {
			await axios.post("https://listify-api-project.herokuapp.com/login", {
				username: username,
				password: password,
			});
			setLoggedIn(true);
			setLoggedinUser(username);
		} catch (error) {
			console.log(error);
			setLoggedIn(false);
			if (error) setErrorMessage(error);
		}
	};
	//Logout Function
	const logoutFunction = async () => {
		setLoggedIn(false);
		console.log("Logout was ran");
		try {
			await axios("https://listify-api-project.herokuapp.com/logout");
		} catch (error) {
			console.log(error);
		}
	};
	//Register Function
	const register = async () => {
		//Lowercases the input username.
		const username = document.getElementById("registerUsername").value;
		const password = document.getElementById("registerPassword").value;
		const repeatPassword = document.getElementById(
			"registerRepeatPassword"
		).value;
		//If the password and repeated password dont match, return from the function and display an error message by setting the state of the error message.
		if (password !== repeatPassword) {
			setRegistrationError("Your repeated password did not match the original");
			return;
		}
		//If the password and repeated password match, create a new user object.
		const newUser = {
			username: username,
			password: password,
		};
		try {
			//Send a request to create a new user.
			await axios.post(
				"https://listify-api-project.herokuapp.com/users/register",
				newUser
			);
			//Marks you as registered to forward you to the front page.
			setRegistered(true);
			setRegistrationError("");
			alert("Your user has been created. Returning you to the frontpage");
			//Resets your registered state so you can access the registration page again.
			setRegistered(false);
			//Clear out the input fields.
			document.getElementById("registerUsername").value = "";
			document.getElementById("registerPassword").value = "";
			document.getElementById("registerRepeatPassword").value = "";
		} catch (error) {
			console.log(error);
			setRegistrationError(error.response.data);
		}
	};
	return (
		<LoginContext.Provider
			value={{
				loggedIn,
				setLoggedIn,
				loginFunction,
				logoutFunction,
				errorMessage,
				registrationError,
				setRegistrationError,
				register,
				registered,
				setRegistered,
				loggedinUser,
				setLoggedinUser,
			}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContext;
