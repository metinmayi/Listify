import Footer from "./Footer";
import Input from "./Input";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import LoginContext from "./context/LoginContext";
import { Link, Navigate } from "react-router-dom";
import Button from "./Button";
import axios from "axios";

const LoginPage = (e) => {
	//ULR import
	const { BaseURL } = useContext(LoginContext);
	//Import the loggedIn state
	const { loggedIn, setLoggedIn } = useContext(LoginContext);
	//Import the loggedInUser
	const { setLoggedinUser } = useContext(LoginContext);
	//Import the login Function
	const { loginFunction } = useContext(LoginContext);
	//import the error message when the login information is wrong.
	const { errorMessage, setErrorMessage } = useContext(LoginContext);
	// Username and Password input fields -- .value IS NOT WORKING
	//ERR
	//ERR
	const usernameInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");
	//Automatically logs you in, if you have an active JWT
	useEffect(() => {
		(async () => {
			try {
				const response = await axios(`${BaseURL}loginStatus`);
				setLoggedIn(true);
				setLoggedinUser(response.data);
			} catch (error) {
				console.log(error);
			}
		})();
	});
	//Clears the login error message when a user writes new info in the password or username Input fields.
	//Belongs to the code on row 21 - ERR
	// useEffect(() => {
	// 	setErrorMessage("");
	// }, [usernameInput, passwordInput]);
	return (
		<div className="Page">
			{/* If you're logged in, navigates you to the main page. Otherwise it displays the input fields for logging in and the registration options. */}
			{loggedIn ? (
				<Navigate to="/mainPage" />
			) : (
				<>
					<div className="LoginPageHeader" style={{ width: "50%" }}>
						<LogoContainer></LogoContainer>
					</div>
					<LoginBox>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								loginFunction();
							}}>
							<Input label="Username" type="text" id="emailInput" />
							<Input label="Password" type="password" id="passwordInput" />
							<Button variant="true">Login</Button>
							<RegisterLink to="/registerpage">
								Not a user? Register here!
							</RegisterLink>
						</Form>

						{/* Shows an error message if login gets set to false. */}
					</LoginBox>
					<WrongPasswordMessage>{errorMessage}</WrongPasswordMessage>
				</>
			)}
			<Footer />
		</div>
	);
};

export default LoginPage;

//#region Declarations
export const LogoContainer = styled.div`
	background-image: url("https://i.ibb.co/0yPv7mr/logo.png");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	height: 25vh;
	margin-top: 2rem;
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
	margin-block-start: 0;
	margin-block-end: 0;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const RegisterLink = styled(Link)`
	color: black;
	font-size: 1rem;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	margin-top: 20px;
`;
//#endregion
