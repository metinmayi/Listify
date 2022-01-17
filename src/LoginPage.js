import Footer from "./Footer";
import Input from "./Input";
import styled from "styled-components";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";
import { Navigate } from "react-router-dom";

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
						<Input
							label="E-mail"
							type="text"
							id="emailInput"
							onKeyPress={(e) => (e.key === "Enter" ? loginFunction() : null)}
						/>
						<Input
							label="Password"
							type="password"
							id="passwordInput"
							onKeyPress={(e) => (e.key === "Enter" ? loginFunction() : null)}
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
