import styled from "styled-components";
const PrimaryButton = ({ children, onClick }) => {
	return (
		<PrimaryButtonWrapper type="submit" onClick={onClick}>
			{children}
		</PrimaryButtonWrapper>
	);
};

export default PrimaryButton;
const PrimaryButtonWrapper = styled.button`
	background-color: #64b9ee;
	border-radius: 50px;
	margin-top: 5px;
	border: none;
	height: 5vh;
	width: 50%;
	font-size: 1.5rem;
`;
