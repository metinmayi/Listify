import React, { useState, useContext, useEffect, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import styled from "styled-components";
import LoginContext from "./context/LoginContext.js";
import MainContainer from "./MainContainer";
import Modal from "./Modal.js";
import Button from "./Button.js";
import { Navigate } from "react-router-dom";
const Main = ({ page }) => {
	//The base URL of the requests.
	const { BaseURL } = useContext(LoginContext);
	//The state containing the fetched list from the database. Either created by the user, or shared to the user.
	const [lists, setLists] = useState([]);
	//The state that triggers visibility of the ListModal (The modal that allows users to create lists.)
	const [showListModal, setShowListModal] = useState(false);
	//A reference to the modals input box. Used to .focus() it on toggle.
	const modalInputRef = useRef(null);
	//The state that holds the currently logged in user.
	const { loggedinUser } = useContext(LoginContext);
	//The state that holds IF a user is logged in or not //PERHAPS MERGE WITH ABOVE?
	const { loggedIn } = useContext(LoginContext);
	//The state that holds which list was specifically selected.
	const { selectedList, setSelectedList } = useContext(LoginContext);

	//Checks if the list added already exists
	const [listExists, setListExists] = useState(false);
	//Function that toggles the modal
	const toggleModal = (e) => {
		e.preventDefault();
		setShowListModal(!showListModal);
		setTimeout(() => {
			modalInputRef.current.focus();
		}, 10);
	};
	//Function that creates a new list.
	const newList = async (e) => {
		e.preventDefault();
		const listName = document.getElementById("newListInput").value;
		try {
			await axios.post(`${BaseURL}lists/createlist/${loggedinUser}`, {
				username: loggedinUser,
				title: listName,
			});
			//Close the modal
			setShowListModal(!showListModal);
			fetchLists();
		} catch (error) {
			console.log(error);
			setListExists(true);
			setTimeout(() => {
				setListExists(false);
			}, 2000);
		}
	};
	//Function that retrieves all lists belonging or shared to a user.
	const fetchLists = async () => {
		try {
			const result = await axios(`${BaseURL}lists/getlists/${loggedinUser}`);
			setLists(result.data);
		} catch (error) {
			console.log(error.response.status);
		}
	};
	//Function that deletes a list.
	const deleteList = async (id) => {
		try {
			await axios.delete(`${BaseURL}lists/delete/${id}`);
			fetchLists();
		} catch (error) {
			console.log(error.message);
		}
	};
	//Invokes the fetchLists() ^ on component load
	useEffect(() => {
		fetchLists();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{!loggedIn && <Navigate to="/" />}
			{showListModal && (
				<Modal
					modalInputRef={modalInputRef}
					modalTrigger={showListModal}
					setModalTrigger={setShowListModal}
					onClick={newList}
					title="Create a new list"
					inputID="newListInput"
					alreadyExists={listExists}
					primaryButtonText="Create List"></Modal>
			)}
			{selectedList && <Navigate to="/listpage" />}
			<DoubleButtonsContainer>
				<Button onClick={toggleModal}>Create New List</Button>
				<Button variant="secondary">Share Lists</Button>
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
