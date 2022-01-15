import Footer from "./Footer";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";
import MainPage from "./MainPage";

const LoginPage = (e) => {
	//#region Functions & States
	const [loggedIn, setLoggedIn] = useState();
	const [errorMessage, setErrorMessage] = useState("");

	const logoutFunction = () => {
		setLoggedIn(false);
		console.log("False;");
	};
	const loginFunction = async () => {
		const userName = document.getElementById("emailInput").value;
		const password = document.getElementById("passwordInput").value;
		try {
			const result = await fetch(
				"https://listify-api-project.herokuapp.com/users"
			);
			const users = await result.json();
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
	const nyFunktion = async (e) => {
		if (e.key === "Enter") {
			loginFunction();
		}
	};
	//#endregion
	return (
		<div className="Page">
			{loggedIn ? (
				<MainPage logoutFunction={logoutFunction} />
			) : (
				<>
					<div className="LoginPageHeader">
						<LogoContainer></LogoContainer>
						<h2>Sign in to Listify</h2>
					</div>
					<LoginBox>
						<Input
							label="E-mail"
							type="text"
							id="emailInput"
							onKeyPress={nyFunktion}
						/>
						<Input
							label="Password"
							type="password"
							id="passwordInput"
							onKeyPress={nyFunktion}
						/>

						{/* Shows an error message if login gets set to false. */}
					</LoginBox>
					<LoginButton onClick={loginFunction}>Login</LoginButton>
					<WrongPasswordMessage>{errorMessage}</WrongPasswordMessage>
				</>
			)}
			<Footer />
		</div>
	);
};

export default LoginPage;

//#region Declarations
const LogoContainer = styled.div`
	background-image: url("https://i.ibb.co/0yPv7mr/logo.png");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	height: 30vh;
`;

const LoginBox = styled.div`
	display: flex;
	justify-content: stretch;
	flex-direction: column;
	width: 50%;
	font-size: 1.5rem;
`;

const WrongPasswordMessage = styled.p`
	text-align: center;
	color: red;
	font-size: 1rem;
`;
const LoginButton = styled.button`
	background-color: #64b9ee;
	border-radius: 50px;
	margin-top: 5px;
	border: none;
	height: 5vh;
	width: 50%;
	font-size: 1.5rem;
`;
//#endregion
