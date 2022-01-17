import { createContext, useState } from "react";
import axios from "axios";
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
	//Login Function
	const loginFunction = async () => {
		const userName = document.getElementById("emailInput").value.toLowerCase();
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
	};
	//Register Function
	const register = async () => {
		const username = document
			.getElementById("registerUsername")
			.value.toLowerCase();
		const password = document.getElementById("registerPassword").value;
		const repeatPassword = document.getElementById(
			"registerRepeatPassword"
		).value;
		//If the password and repeated password dont match, return from the function and display an error message by setting the state of the error message.
		if (password !== repeatPassword) {
			setRegistrationError("Wrong username and/or password");
			return;
		}
		//If the password and repeated password match, create a new user object.
		const newUser = {
			username: username,
			password: password,
		};
		try {
			//See if there's an already existing user with the same username.
			const alreadyExists = await axios(
				`https://listify-api-project.herokuapp.com/users/${username}`
			);
			//If there isn't an already existing user, create one by posting to the API
			if (!alreadyExists.data.username) {
				await axios.post(
					"https://listify-api-project.herokuapp.com/users",
					newUser
				);
				//Marks you as registered to forward you to the front page.
				setRegistered(true);
				setRegistrationError("");
				alert("Your user has been created. Returning you to the frontpage");
				//Resets your registered state so you can access the registration page again.
				setRegistered(false);
			}
			//If there's already an existing user, show an error message.
			if (alreadyExists.data.username) {
				setRegistrationError("That username already exists!");
			}
			//Clear out the input fields.
			document.getElementById("registerUsername").value = "";
			document.getElementById("registerPassword").value = "";
			document.getElementById("registerRepeatPassword").value = "";
		} catch (error) {
			console.log(error.message);
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
			}}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContext;
