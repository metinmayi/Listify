import React from "react";
import styled from "styled-components";
import { LogoContainer } from "./LoginPage";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	return (
		<div className="Page">
			<LogoContainer></LogoContainer>
			<NoticeText>
				Since this project is just for educational purposes, you can simply
				register with only a username and email. <br /> This is to showcase the
				functionality of the authentication system
			</NoticeText>
			<RegistrationForm
				onSubmit={(e) =>
					alert(
						"Registration is not yet available. Use these details if you want to login: \n username:admin \n password: HireMe"
					)
				}>
				<label htmlFor="registerUsername">Username:</label>
				<Input type="text" />
				<label htmlFor="registerPassword">Password:</label>
				<Input type="text" />
				<label htmlFor="registerRepeatPassword">Repeat your password:</label>
				<Input type="text" />
				<PrimaryButton text={"Register"}></PrimaryButton>
			</RegistrationForm>
			<Link to="/">Back to mainpage</Link>
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
