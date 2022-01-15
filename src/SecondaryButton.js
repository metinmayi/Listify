import React from "react";
import styled from "styled-components";

const SecondaryButton = () => {
	return <Secondary>Old Lists</Secondary>;
};

export default SecondaryButton;
const Secondary = styled.button`
	background-color: #e2e54f;
	border-radius: 50px;
	margin-top: 5px;
	border: none;
	height: 5vh;
	font-size: 1rem;
	flex-grow: 1;
	font-weight: 400;
	font-family: "Roboto Slab";
`;
