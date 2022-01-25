import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import LoginContext from "./context/LoginContext";

const Modal = ({ showmodal, setShowmodal, setLists }) => {
	//Uses the URL for the app
	const { BaseURL } = useContext(LoginContext);
	//Checks WHICH user is loggedin
	const { loggedinUser } = useContext(LoginContext);
	//Checks if the list added already exists
	const [listExists, setListExists] = useState(false);

	//The function that toggles modals
	const toggleModal = (e) => {
		e.preventDefault();
		setShowmodal(!showmodal);
	};

	//The function that refreshes the display of lists
	const fetchLists = async () => {
		try {
			const result = await axios(`${BaseURL}lists/getlists/${loggedinUser}`);
			setLists(result.data);
		} catch (error) {
			console.log(error);
		}
	};

	//The function that creates a new list
	const newList = async (e) => {
		e.preventDefault();
		const listName = document.getElementById("newListInput").value;
		try {
			await axios.post(`${BaseURL}lists/createlist/${loggedinUser}`, {
				username: loggedinUser,
				title: listName,
			});
			//Close the modal
			setShowmodal(!showmodal);
			fetchLists();
		} catch (error) {
			console.log(error);
			setListExists(true);
			setTimeout(() => {
				setListExists(false);
			}, 2000);
		}
	};
	return (
		<Background>
			<ModalContainer>
				<h3>Add new item</h3>
				<Form action="">
					<Input type="text" id="newListInput" />
					<ButtonContainer>
						<Button onClick={newList}>Add Item</Button>
						<Button variant="secondary" onClick={toggleModal}>
							Close
						</Button>
					</ButtonContainer>
				</Form>
				{listExists && (
					<AlreadyExistsMessage>
						A list with that name already exists!
					</AlreadyExistsMessage>
				)}
			</ModalContainer>
		</Background>
	);
};

export default Modal;

const Background = styled.div`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ModalContainer = styled.div`
	width: 80%;
	padding: 10px;
	background: #f5f5f5;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		width: 40%;
	}
	@media (min-width: 1024px) {
		width: 25%;
	}
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
`;
const ButtonContainer = styled.div`
	width: 95%;
	justify-content: space-between;
	display: flex;
	gap: 5px;
`;
const Input = styled.input`
	width: 95%;
	height: 3vh;
`;
const AlreadyExistsMessage = styled.p`
	margin-block-start: 0;
	margin-block-end: 0;
	color: red;
`;
