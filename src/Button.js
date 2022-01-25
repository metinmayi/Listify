import React from "react";
import styled, { css } from "styled-components";

const Button = ({ children, variant, onClick }) => {
	return (
		<Primary variant={variant} onClick={onClick ? (e) => onClick(e) : null}>
			{children}
		</Primary>
	);
};

export default Button;
const Primary = styled.button`
	background-color: #64b9ee;
	border-radius: 10px;
	// margin-top: 5px;
	border: none;
	height: 5vh;
	font-size: 1rem;
	flex-grow: 1;
	font-weight: 400;
	font-family: "Roboto Slab";
	${({ variant }) =>
		variant === "secondary"
			? css`
					background-color: #e2e54f;
			  `
			: variant ==="tertiary" 
			? css`
					background-color:#fff;
					border: 1px solid gray` 
				: null}
`;

