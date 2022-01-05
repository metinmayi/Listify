import styled from "styled-components";
const Header = () => {
	return (
		<div style={{ width: "100%" }}>
			<NameAndLogout>
				<p>Name</p>
				<p>Logout</p>
			</NameAndLogout>
			<HeaderText>Lisitfy</HeaderText>
		</div>
	);
};

export default Header;

const NameAndLogout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	width: 100%;
`;
const HeaderText = styled.h3`
	color: yellow;
	-webkit-text-stroke: 0.2px #64b9ee;
	text-align: center;
`;
