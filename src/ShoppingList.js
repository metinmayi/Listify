import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShoppingList = () => {
	return (
		<List>
			<Link className="Link" to="/shoppinglist">
				ICA
			</Link>
			<ListItems>Kött, Blåbär, Kyckling...</ListItems>
		</List>
	);
};

export default ShoppingList;

const ListItems = styled.h6`
	margin-block-start: 0;
`;

const List = styled.div`
	border-bottom: 1px solid gray;
`;
