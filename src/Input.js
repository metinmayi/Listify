import styled from "styled-components";
const Input = ({ label, type, id }) => {
	return (
		<>
			<label htmlFor="input">{label}</label>
			<InputStyle type={type} id={id} />
		</>
	);
};

export default Input;

const InputStyle = styled.input`
	background-color: rgba(183, 181, 181, 0.5);
	border-radius: 50px;
	height: 5vh;
	border: none;
	padding: 0 3%;
	font-size: 1.25rem;
`;
