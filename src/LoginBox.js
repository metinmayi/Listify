import React from "react";
import LoginInputBox from "./LoginInputBox";
import DefaultButton from "./DefaultButton";

const LoginBox = () => {
	return (
		<div className="LoginBox">
			<LoginInputBox label="E-mail" type="text" />
			<LoginInputBox label="Password" type="password" />
			<DefaultButton text="Login" />
		</div>
	);
};

export default LoginBox;
