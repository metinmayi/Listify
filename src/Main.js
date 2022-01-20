import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import LoginContext from "./context/LoginContext.js";
import DoubleButtons from "./DoubleButtons.js";
import MainContainer from "./MainContainer";
const Main = () => {
	const [lists, setLists] = useState([]);
	const { loggedinUser } = useContext(LoginContext);
	const fetchLists = async () => {
		const result = await axios(`http://localhost:5000/lists/${loggedinUser}`);
		setLists(result.data);
	};
	useEffect(() => {
		fetchLists();
	}, []);
	return (
		<>
			<DoubleButtons></DoubleButtons>
			<MainContainer page="Shopping Lists">
				{lists.length < 1 ? (
					<p style={{ textAlign: "center" }}>No lists found</p>
				) : (
					lists.map((list) => (
						<>
							<ListHeader>{list.title}</ListHeader>
							<ListItems>Ett,två,tre....</ListItems>
						</>
					))
				)}
			</MainContainer>
		</>
	);
};

const ListHeader = styled.p`
	font-size: 1.5rem;
	margin-block-start: 0;
	margin-block-end: 0;
`;
const ListItems = styled.p`
	border-bottom: 1px solid black;
	margin-block-start: 0;
`;

export default Main;
