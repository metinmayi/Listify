import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled, { css } from "styled-components";

const ListItem = ({ variant }) => {
	return (
		<>
			<ListItemDiv variant={variant}>
				<span>Name</span>
				<div>
					<TrashCan></TrashCan>
				</div>
			</ListItemDiv>
		</>
	);
};

export default ListItem;
const ListItemDiv = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
	border-bottom: 1px solid gray;
	${({ variant }) =>
		variant === "checked"
			? css`
					text-decoration: line-through;
			  `
			: null}
`;

const TrashCan = styled(FaTrashAlt)`
	color: red;
	opacity: 0.2;
	&:hover {
		opacity: 0.75;
	}
`;
