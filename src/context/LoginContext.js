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
	const [loggedIn, setLoggedIn] = useState();
	//ErrorMessage if login fails
	const [errorMessage, setErrorMessage] = useState("");
	//Stores the name of the logged in user
	const [loggedinUser, setLoggedinuser] = useState("");

	//Login Function
	const loginFunction = async () => {
		const username = document.getElementById("emailInput").value.toLowerCase();
		const password = document.getElementById("passwordInput").value;
		//Requests a login
		try {
			await axios.post("https://listify-api-project.herokuapp.com/", {
				username: username,
				password: password,
			});
			setLoggedIn(true);
			setLoggedinuser(username);
		} catch (error) {
			console.log(error);
			setLoggedIn(false);
			setErrorMessage(error.response.data);
		}
	};
	//Logout Function
	const logoutFunction = () => {
		setLoggedIn(false);
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
			}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContext;
