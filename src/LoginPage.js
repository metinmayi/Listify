import Footer from "./Footer";
import LoginBox from "./LoginBox";
import DefaultButton from "./DefaultButton";
import { Link } from "react-router-dom";
const LoginPage = () => {
	return (
		<div className="LoginPage">
			<div className="LoginPageFooter">
			<div className="LogoContainer"></div>
			<h2>Sign in to Listify</h2>
			</div>
			<LoginBox />
			<Link to="/mainpage"><DefaultButton text="Login" /></Link>
			<Footer />
		</div>
	);
};

export default LoginPage;
