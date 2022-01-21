import React from "react";
import styled from "styled-components";

const ListOfLists = ({ page, children }) => {
	return (
		<ListOfListsContainer>
			<ListOfListsTitle>{page}</ListOfListsTitle>
			{children}
		</ListOfListsContainer>
	);
};

export default ListOfLists;

const ListOfListsContainer = styled.div`
	height: 60vh;
	width: 90%;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 2%;
	overflow: scroll;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
const ListOfListsTitle = styled.h2`
	text-align: center;
`;
