import axios from "axios";
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import LoginContext from "./context/LoginContext";

const Modal = ({ showmodal, setShowmodal, setLists }) => {
	const { loggedinUser } = useContext(LoginContext);
	const toggleModal = (e) => {
		e.preventDefault();
		setShowmodal(!showmodal);
	};
	const fetchLists = async () => {
		const result = await axios(
			`https://listify-api-project.herokuapp.com/lists/user/${loggedinUser}`
		);
		setLists(result.data);
	};
	const newList = async (e) => {
		e.preventDefault();

		const listTitle = document.getElementById("newListInput").value;
		//Check if a list with that name already exists registered to the current user.
		//Fetch the current lists
		try {
			const result = await axios(
				`https://listify-api-project.herokuapp.com/lists/user/${loggedinUser}`
			);
			const existingList = result.data;
			//Loop through the existing lists and check if anyone of them has the same title as the listTitle.
			let matches = false;
			//If you find any match, set matches to true
			existingList.forEach((list) => {
				listTitle.toLowerCase() === list.title.toLowerCase()
					? (matches = true)
					: console.log("No match");
			});
			//If there was a match, throw alert and exit function
			if (matches) {
				alert("You already have a list with that name");
				return;
			}
			//If there was no match, add this list to the database.
			await axios.post(
				`https://listify-api-project.herokuapp.com/lists/user/${loggedinUser}`,
				{
					username: loggedinUser,
					title: listTitle,
				}
			);
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
