import React from "react";
import styled from "styled-components";
import { LogoContainer } from "./LoginPage";
import Input from "./Input";
import Button from "./Button";
import Footer from "./Footer";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "./context/LoginContext";

const RegisterPage = () => {
	const { registrationError } = useContext(LoginContext);
	const { register } = useContext(LoginContext);
	const { registered } = useContext(LoginContext);

	return (
		<div className="Page">
			{registered && <Navigate to="/" />}
			<div className="LoginPageHeader" style={{ width: "50%" }}>
				<LogoContainer></LogoContainer>
			</div>
			<NoticeText>
				Since this project is just for educational purposes, you can simply
				register with only a username and email. <br /> This is to showcase the
				functionality of the authentication system
			</NoticeText>
			<RegistrationForm
				onSubmit={(e) => {
					e.preventDefault();
					register();
				}}>
				<label htmlFor="registerUsername">Username:</label>
				<Input type="text" id="registerUsername" />
				<label htmlFor="registerPassword">Password:</label>
				<Input type="password" id="registerPassword" />
				<label htmlFor="registerRepeatPassword">Repeat your password:</label>
				<Input type="password" id="registerRepeatPassword" />
				<Button>Register</Button>
			</RegistrationForm>
			<StyledLink to="/">Back to mainpage</StyledLink>
			{registrationError.length > 0 && (
				<p style={{ color: "red" }}>{registrationError}</p>
			)}

			<Footer></Footer>
		</div>
	);
};

export default RegisterPage;

const RegistrationForm = styled.form`
	display: flex;
	flex-direction: column;
`;
const NoticeText = styled.p`
	font-size: 0.75rem;
	text-align: center;
`;
const StyledLink = styled(Link)`
	color: black;
	cursor: pointer;
`;
