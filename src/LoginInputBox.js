const LoginInputBox = ({ label, type }) => {
	return (
		<>
			<label htmlFor="input">{label}</label>
			<input type={type} />
		</>
	);
};

export default LoginInputBox;
