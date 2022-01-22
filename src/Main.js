import React, { useState, useContext, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
import LoginContext from "./context/LoginContext.js";
import MainContainer from "./MainContainer";
import Modal from "./Modal.js";
import Button from "./Button.js";
const Main = ({ page }) => {
	const [lists, setLists] = useState([]);
	const [showmodal, setShowmodal] = useState(false);
	const { loggedinUser } = useContext(LoginContext);
	//Function that toggles the modal
	const toggleModal = (e) => {
		e.preventDefault();
		setShowmodal(!showmodal);
	};
	const fetchLists = async () => {
		try {
			const result = await axios(
				`https://listify-api-project.herokuapp.com/lists/getlists/${loggedinUser}`
			);
			setLists(result.data);
		} catch (error) {
			console.log(error);
		}
	};
	const deleteList = async (id) => {
		try {
			await axios.delete(
				`https://listify-api-project.herokuapp.com/lists/delete/${id}`
			);
			fetchLists();
		} catch (error) {
			console.log(error.message);
		}
	};
	useEffect(() => {
		fetchLists();
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			<MainContainer page={page}>
				{lists.length < 1 ? (
					<p style={{ textAlign: "center" }}>No lists found</p>
				) : (
					lists.map((list) => (
						<ListContainer key={list._id} id={list._id}>
							<div onClick={(e) => console.log(e.target.parentNode)}>
								<ListHeader>{list.title}</ListHeader>
								{list.items.length < 1 ? (
									<ListItems>Empty list</ListItems>
								) : list.items.length < 2 ? (
									<ListItems>{`${list.items[0]}`}</ListItems>
								) : list.items.length < 3 ? (
									<ListItems>{`${list.items[0]}, ${list.items[1]}`}</ListItems>
								) : (
									<ListItems>{`${list.items[0]}, ${list.items[1]}, ${list.items[2]}...`}</ListItems>
								)}
							</div>
							<div onClick={(e) => deleteList(e.target.parentNode.id)}>
								<FaTrashAlt style={{ color: "red" }} pointerEvents="none" />
							</div>
						</ListContainer>
					))
				)}
			</MainContainer>
		</>
	);
};

const ListContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid gray;
`;

const ListHeader = styled.p`
	font-size: 1.5rem;
	margin-block-start: 0;
	margin-block-end: 0;
	pointer-events: none;
`;
const ListItems = styled.p`
	// border-bottom: 1px solid black;
	margin-block-start: 0;
	margin-block-end: 0;
	pointer-events: none;
`;
export const DoubleButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	width: 90%;
`;
export default Main;
