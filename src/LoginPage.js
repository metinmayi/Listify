import Footer from "./Footer";
import DefaultButton from "./DefaultButton";
import Input from "./Input";
import styled from "styled-components";
// import { Link } from "react-router-dom";

//#region Functions
const Login = () => {};
//#endregion

const LoginPage = () => {
	return (
		<div className="Page">
			<div className="LoginPageHeader">
				<LogoContainer></LogoContainer>
				<h2>Sign in to Listify</h2>
			</div>
			<LoginBox>
				<Input label="E-mail" type="text" id="emailInput" />
				<Input label="Password" type="password" id="passwordInput" />
			</LoginBox>
			<DefaultButton onClick={Login}>Login</DefaultButton>
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
//#endregion
