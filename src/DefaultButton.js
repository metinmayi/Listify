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
	border-radius: 50px;
	margin-top: 5px;
	border: none;
	height: 5vh;
	width: 50%;
	font-size:1.5rem;
`;
 