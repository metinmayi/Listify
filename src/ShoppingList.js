import React from "react";
import styled from "styled-components";

const ShoppingList = () => {
	return (
		<List>
			<ListHeader>ICA</ListHeader>
			<ListItems>Kött, Blåbär, Kyckling...</ListItems>
		</List>
	);
};

export default ShoppingList;

const ListHeader = styled.h3`
	font-size: 2rem;
	margin-block-end: 0;
`;
const ListItems = styled.h6`
	margin-block-start: 0;
`;

const List = styled.div`
	border-bottom: 1px solid gray;
`;
