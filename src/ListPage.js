import React, { useContext } from "react";
import LoginContext from "./context/LoginContext";
import Footer from "./Footer";
import Header from "./Header";
import { DoubleButtonsContainer } from "./Main";
import Button from "./Button";
import MainContainer from "./MainContainer";
import { BsCheckLg, BsPlusLg } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import Input from "./Input";
import { Navigate } from "react-router-dom";

const ListPage = () => {
	const { selectedList, setSelectedList } = useContext(LoginContext);
	const { loggedIn } = useContext(LoginContext);
	const testfunction = () => {
		console.log("Hej");
	};
	const backToLists = () => {
		setSelectedList(false);
	};
	return (
		<div className="Page">
			{!loggedIn && <Navigate to="/" />}
			{!selectedList && <Navigate to="/mainpage" />}
			<Header />
			<DoubleButtonsContainer>
				<Button variant="tertiary" onClick={backToLists}>
					Back to lists
				</Button>
				<Button variant="secondary">Old Lists</Button>
			</DoubleButtonsContainer>
			<MainContainer page="Under Construction">
				<AddItemDiv>
					<AddItemInput></AddItemInput>
					<Button onClick={testfunction}>
						<BsPlusLg></BsPlusLg>
					</Button>
				</AddItemDiv>
				<Container style={{ width: "80%" }}>
					<ListItem>
						<span>Name</span>
						<div>
							<BsCheckLg></BsCheckLg>
							<FaTrashAlt></FaTrashAlt>
						</div>
					</ListItem>{" "}
					<ListItem>
						<span>Name</span>
						<div>
							<BsCheckLg></BsCheckLg>
							<FaTrashAlt></FaTrashAlt>
						</div>
					</ListItem>{" "}
					<ListItem>
						<span>Name</span>
						<div>
							<BsCheckLg></BsCheckLg>
							<FaTrashAlt></FaTrashAlt>
						</div>
					</ListItem>
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

const ListItem = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.5rem;
	border-bottom: 1px solid gray;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
