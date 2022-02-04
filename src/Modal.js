import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Modal = ({
	modalTrigger,
	setModalTrigger,
	onClick,
	modalInputRef,
	title,
	inputID,
	alreadyExists,
	primaryButtonText,
}) => {
	//The function that toggles modals
	const toggleModal = (e) => {
		e.preventDefault();
		setModalTrigger(!modalTrigger);
	};
	return (
		<Background>
			<ModalContainer>
				<h3>{title}</h3>
				<Form action="">
					<Input type="text" id={inputID} ref={modalInputRef} />
					<ButtonContainer>
						<Button onClick={onClick}>{primaryButtonText}</Button>
						<Button variant="secondary" onClick={toggleModal}>
							Close
						</Button>
					</ButtonContainer>
				</Form>
				{alreadyExists && (
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
