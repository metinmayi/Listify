import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled, { css } from "styled-components";

const ListItem = ({ variant, name, updateItem, deleteItem }) => {
	return (
		<>
			<ListItemDiv variant={variant}>
				<span onClick={updateItem}>{name}</span>
				<Div id={name} onClick={deleteItem}>
					<FaTrashAlt style={{ pointerEvents: "none" }}> </FaTrashAlt>
				</Div>
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
					opacity: 0.75;
			  `
			: null}
`;

// const TrashCan = styled(FaTrashAlt)`

// `;
const Div = styled.div`
	color: red;
	opacity: 0.2;

	&:hover {
		opacity: 0.75;
	}
`;
