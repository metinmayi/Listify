import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import styled from "styled-components";

const DoubleButtons = () => {
	return (
		<DoubleButtonsContainer>
			<PrimaryButton text="Create New Lists"></PrimaryButton>
			<SecondaryButton></SecondaryButton>
		</DoubleButtonsContainer>
	);
};

export default DoubleButtons;
export const DoubleButtonsContainer = styled.div`
	display: flex;
	gap: 20px;
	width: 90%;
`;
