import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";

const ListItem = () => {
	return (
		<>
			<ListItemDiv>
				<span>Name</span>
				<div>
					<BsCheckLg></BsCheckLg>
					<FaTrashAlt></FaTrashAlt>
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
`;
