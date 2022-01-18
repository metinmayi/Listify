import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ text }) => {
	return <Primary>{text}</Primary>;
};

export default PrimaryButton;
const Primary = styled.button`
	background-color: #64b9ee;
	border-radius: 10px;
	margin-top: 5px;
	border: none;
	height: 5vh;
	font-size: 1rem;
	flex-grow: 1;
	font-weight: 400;
	font-family: "Roboto Slab";
`;
