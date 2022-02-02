import React, { useState, useContext, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
import LoginContext from "./context/LoginContext.js";
import MainContainer from "./MainContainer";
import Modal from "./Modal.js";
import Button from "./Button.js";
import { Navigate } from "react-router-dom";
const Main = ({ page }) => {
	const { BaseURL } = useContext(LoginContext);
	const [lists, setLists] = useState([]);
	const [showmodal, setShowmodal] = useState(false);
	const { loggedinUser } = useContext(LoginContext);
	const { loggedIn } = useContext(LoginContext);
	const { selectedList, setSelectedList } = useContext(LoginContext);
	//Function that toggles the modal
	const toggleModal = (e) => {
		e.preventDefault();
		setShowmodal(!showmodal);
	};
	const fetchLists = async () => {
		try {
			const result = await axios(`${BaseURL}lists/getlists/${loggedinUser}`);
			setLists(result.data);
		} catch (error) {
			console.log(error.response.status);
		}
	};
	const deleteList = async (id) => {
		try {
			await axios.delete(`${BaseURL}lists/delete/${id}`);
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
			{!loggedIn && <Navigate to="/" />}
			{showmodal && (
				<Modal
					showmodal={showmodal}
					setShowmodal={setShowmodal}
					setLists={setLists}></Modal>
			)}
			{selectedList && <Navigate to="/listpage" />}
			<DoubleButtonsContainer>
				<Button onClick={toggleModal}>Create New List</Button>
				<Button variant="secondary">Old Lists</Button>
			</DoubleButtonsContainer>
			<MainContainer page={page}>
				{lists.length < 1 ? (
					<p style={{ textAlign: "center" }}>No lists found</p>
				) : (
					//Maps through your array of lists and prints them out.
					lists.map((list) => (
						<ListContainer key={list._id} id={list._id}>
							{/* Each list gets an OnClick so you can navigate to it later.*/}
							<div onClick={(e) => setSelectedList(list)}>
								<ListHeader>{list.title}</ListHeader>
								{/*Depending on how many items are in your list, it will display it differently */}
								{list.items.length < 1 ? (
									<ListItems>Empty list</ListItems>
								) : list.items.length < 2 ? (
									<ListItems>{`${list.items[0].name}`}</ListItems>
								) : list.items.length < 3 ? (
									<ListItems>{`${list.items[0].name}, ${list.items[1].name}`}</ListItems>
								) : (
									<ListItems>{`${list.items[0].name}, ${list.items[1].name}, ${list.items[2].name}...`}</ListItems>
								)}
							</div>
							{/* Each list gets an OnClick so you can delete it*/}
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
	width: 90%;
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
