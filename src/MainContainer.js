import React from "react";
import styled from "styled-components";
import ShoppingList from "./ShoppingList";

const ListOfLists = ({ page }) => {
	return (
		<ListOfListsContainer>
			<ListOfListsTitle>{page}</ListOfListsTitle>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
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
`;
const ListOfListsTitle = styled.h2`
	text-align: center;
`;
