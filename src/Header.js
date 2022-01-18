import { useContext } from "react";
import styled from "styled-components";
import LoginContext from "./context/LoginContext";
const Header = ({ logoutFunction }) => {
	const { loggedinUser } = useContext(LoginContext);
	return (
		<div style={{ width: "100%" }}>
			<HeaderContainer>
				<HeaderText>Lisitfy</HeaderText>
				<NameAndLogout>
					<NoMarginParagraph>
						{
							// Makes the usernames first letter to an uppercase letter
							loggedinUser.charAt(0).toUpperCase() + loggedinUser.slice(1)
						}
					</NoMarginParagraph>
					<NoMarginParagraph onClick={logoutFunction}>Logout</NoMarginParagraph>
				</NameAndLogout>
			</HeaderContainer>
		</div>
	);
};

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	// flex-direction: column;
	align-items: flex-end;
	width: 100%;
	height: 10vh;
`;
const NameAndLogout = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-right: 1rem;
`;
const HeaderText = styled.h1`
	color: #edcf2e;
	font-size: 2.5rem;
	-webkit-text-stroke: 1px rgba(100, 185, 238, 0.5);
	text-align: center;
	margin-left: 1rem;
`;

const NoMarginParagraph = styled.a`
	margin-block-start: 0em;
	margin-block-end: 0em;
	top: 0;
	border: none;
	cursor: pointer;
`;
