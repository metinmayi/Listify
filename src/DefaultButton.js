import styled from "styled-components";
const DefaultButton = ({ text }) => {
	return (
		<>
			<LoginButton className="DefaultButton" type="submit">
				{text}
			</LoginButton>
		</>
	);
};

export default DefaultButton;
const LoginButton = styled.button`
	background-color: #64b9ee;
	margin-top: 5px;
	height: 25%;
	border: none;
`;
