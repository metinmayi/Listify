import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import LoginContext from "./context/LoginContext.js";
import MainContainer from "./MainContainer";
import Modal from "./Modal.js";
import Button from "./Button.js";
const Main = () => {
	const toggleModal = (e) => {
		e.preventDefault();
		setShowmodal(!showmodal);
	};
	const [lists, setLists] = useState([]);
	const [showmodal, setShowmodal] = useState(false);
	const { loggedinUser } = useContext(LoginContext);
	const fetchLists = async () => {
		const result = await axios(
			`https://listify-api-project.herokuapp.com/lists/${loggedinUser}`
		);
		setLists(result.data);
	};
	useEffect(() => {
		fetchLists();
	}, []);
	return (
		<>
			{showmodal && (
				<Modal
					showmodal={showmodal}
					setShowmodal={setShowmodal}
					setLists={setLists}></Modal>
			)}
			<DoubleButtonsContainer>
				<Button onClick={toggleModal}>Create New List</Button>
				<Button variant="secondary">Old Lists</Button>
			</DoubleButtonsContainer>
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
export const DoubleButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	width: 90%;
`;
export default Main;
