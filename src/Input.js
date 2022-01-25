import React, { useContext } from "react";
import styled from "styled-components";
import LoginContext from "./context/LoginContext";

const Input = ({ label, type, id, onKeyPress }) => {
	//Imports the setter for the errorMessage state
	const { setErrorMessage } = useContext(LoginContext);
	return (
		<>
			<label htmlFor="input">{label}</label>
			{/* The Input button which is the reference poi */}
			<InputStyle
				type={type}
				id={id}
				onKeyPress={onKeyPress}
				autoComplete="off"
				// ref={inputValue}
				onChange={() => setErrorMessage("")}
			/>
		</>
	);
};

export default Input;

const InputStyle = styled.input`
	background-color: rgba(183, 181, 181, 0.5);
	border-radius: 10px;
	height: 5vh;
	border: none;
	padding: 0 3%;
	font-size: 1.25rem;
`;
