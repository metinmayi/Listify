import styled from "styled-components";
const Footer = () => {
	return (
		<FooterComponent>
			<FooterP>Looking for help?</FooterP>
			<FooterP>Contact me at</FooterP>
			<FooterP>metinmayi@gmail.com</FooterP>
			<br />
		</FooterComponent>
	);
};

export default Footer;

const FooterComponent = styled.div`
	font-size: 1rem;
	text-align: center;
`;
const FooterP = styled.p`
	margin-block-start: 0;
	margin-block-end: 0;
`;
