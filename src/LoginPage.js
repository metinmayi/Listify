import Footer from "./Footer";
import Input from "./Input";
import styled from "styled-components";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";
import { Link, Navigate } from "react-router-dom";

const LoginPage = (e) => {
	//#region Functions & States

	//#endregion
	const { loggedIn } = useContext(LoginContext);
	const { loginFunction } = useContext(LoginContext);
	const { errorMessage } = useContext(LoginContext);
	return (
		<div className="Page">
			{loggedIn ? (
				<Navigate to="/mainPage" />
			) : (
				<>
					<div className="LoginPageHeader">
						<LogoContainer></LogoContainer>
						<h2>Sign in to Listify</h2>
					</div>
					<LoginBox>
						<Form
							onSubmit={(e) => {
								e.preventDefault();
								loginFunction();
							}}>
							<Input label="E-mail" type="text" id="emailInput" />
							<Input label="Password" type="password" id="passwordInput" />
							<LoginButton>Login</LoginButton>
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
	height: 30vh;
	width: 100%;
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
	margin-top: 10px;
	border: none;
	height: 5vh;
	width: 100%;
	font-size: 1.5rem;
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
