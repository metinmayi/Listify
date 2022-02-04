import React, { useContext, useEffect, useState } from "react";
import LoginContext from "./context/LoginContext";
import Footer from "./Footer";
import Header from "./Header";
import { DoubleButtonsContainer } from "./Main";
import Button from "./Button";
import MainContainer from "./MainContainer";
import { BsPlusLg } from "react-icons/bs";
import ListItem from "./components/ListItem";
import axios from "axios";

import styled from "styled-components";

import { Navigate } from "react-router-dom";

const ListPage = () => {
	//The URL of the website
	const { BaseURL } = useContext(LoginContext);
	//The list object that has been clicked. Identified by its _id
	const { selectedList, setSelectedList } = useContext(LoginContext);
	//Is there a logged in user?
	const { loggedIn } = useContext(LoginContext);
	//State that stores our fetched items belonging to our list.
	const [databaseItems, setDatabaseItems] = useState([]);

	//Function to add an item to the selected lis
	const addItem = async () => {
		try {
			const inputValue = document.getElementById("addItemInput").value;
			await axios.patch(`${BaseURL}items/add/${selectedList._id}`, {
				name: inputValue,
				bought: false,
			});
			fetchData();
		} catch (error) {
			console.log(error.response);
		}
		document.getElementById("addItemInput").value = "";
	};
	//Function to update the state of an item
	const updateItem = async (e) => {
		const name = e.target.outerText;
		try {
			await axios.patch(`${BaseURL}items/update/${selectedList._id}/${name}`);
			fetchData();
		} catch (error) {
			console.log(error);
		}
	};
	//Function to delete items
	const deleteItem = async (e) => {
		try {
			await axios.delete(
				`${BaseURL}items/delete/${selectedList._id}/${e.target.id}`
			);
			fetchData();
		} catch (error) {
			console.log(error);
		}
	};
	//Removes the selected list so that it returns you to the list of lists.
	const backToLists = () => {
		setSelectedList(false);
	};
	//Finds a list that has the same ID as our selectedList._id. Store it inside the setDatabaseItems state.
	const fetchData = async () => {
		try {
			const list = await axios(
				`${BaseURL}lists/getlistbyid/${selectedList._id}`
			);
			list.data.items.sort((a, b) => a.bought - b.bought);
			// console.log(sortedlist);
			setDatabaseItems(list.data.items);
		} catch (error) {
			console.log(error);
		}
	};

	//Function to retrieve the items
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="Page">
			{!loggedIn && <Navigate to="/" />}
			{!selectedList && <Navigate to="/mainpage" />}
			<Header />
			<DoubleButtonsContainer>
				<Button variant="tertiary" onClick={backToLists}>
					Back to lists
				</Button>
				<Button variant="secondary">Share Lists</Button>
			</DoubleButtonsContainer>
			<MainContainer page={selectedList.title}>
				<AddItemDiv>
					<AddItemInput id="addItemInput"></AddItemInput>
					<Button variant="noMargin" onClick={addItem}>
						<BsPlusLg></BsPlusLg>
					</Button>
				</AddItemDiv>
				<Container style={{ width: "80%" }}>
					{databaseItems.length > 0 ? (
						databaseItems.map((dbitem) =>
							dbitem.bought === false ? (
								<ListItem
									name={dbitem.name}
									key={dbitem.name}
									updateItem={updateItem}
									deleteItem={deleteItem}
								/>
							) : (
								<ListItem
									name={dbitem.name}
									key={dbitem.name}
									updateItem={updateItem}
									deleteItem={deleteItem}
									variant="checked"
								/>
							)
						)
					) : (
						<p style={{ textAlign: "center" }}>No items found</p>
					)}
				</Container>
			</MainContainer>
			<Footer />
		</div>
	);
};

export default ListPage;

const AddItemDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	width: 80%;
	background-color: rgba(183, 181, 181, 0.5);
	border-radius: 10px;
`;
const AddItemInput = styled.input`
	background-color: rgba(0, 0, 0, 0);
	height: 5vh;
	border: none;
	width: 70%;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 1.5rem;
`;
