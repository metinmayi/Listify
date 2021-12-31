const DefaultButton = ({ text }) => {
	return (
		<>
			<button
				className="DefaultButton"
				type="submit"
				width="100px"
				height="100px">
				{text}
			</button>
		</>
	);
};

export default DefaultButton;
