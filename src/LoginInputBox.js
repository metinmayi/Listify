import styled from "styled-components";
const LoginInputBox = ({ label, type }) => {
	return (
		<>
			<label htmlFor="input">{label}</label>
			<InputStyle type={type} />
		</>
	);
};

export default LoginInputBox;

const InputStyle = styled.input`
	background-color: rgba(183, 181, 181, 0.5);
	border-radius: 50px;
	height: 20%;
	border: none;
`;
