import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import LoginContext from "./context/LoginContext";

const Modal = ({ showmodal, setShowmodal, setLists }) => {
	const { BaseURL } = useContext(LoginContext);
	const { loggedinUser } = useContext(LoginContext);
	const toggleModal = (e) => {
		e.preventDefault();
		setShowmodal(!showmodal);
	};
	const fetchLists = async () => {
		try {
			const result = await axios(`${BaseURL}lists/getlists/${loggedinUser}`);
			setLists(result.data);
		} catch (error) {
			console.log(error);
		}
	};

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
