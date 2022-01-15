import React from "react";
import styled from "styled-components";
import ShoppingList from "./ShoppingList";

const MainContainer = ({ page }) => {
	return (
		<Container>
			<ContainerTitle>{page}</ContainerTitle>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
			<ShoppingList></ShoppingList>
		</Container>
	);
};

export default MainContainer;

const Container = styled.div`
	height: 60vh;
	width: 90%;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	padding: 2%;
	overflow: scroll;
`;
const ContainerTitle = styled.h2`
	text-align: center;
`;
