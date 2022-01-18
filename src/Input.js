import styled from "styled-components";
const Input = ({ label, type, id, onKeyPress }) => {
	return (
		<>
			<label htmlFor="input">{label}</label>
			<InputStyle
				type={type}
				id={id}
				onKeyPress={onKeyPress}
				autoComplete="off"
			/>
		</>
	);
};

export default Input;

const InputStyle = styled.input`
	background-color: rgba(183, 181, 181, 0.5);
	border-radius: 10px;
	height: 5vh;
	border: none;
	padding: 0 3%;
	font-size: 1.25rem;
`;
