import Footer from "./Footer";
import LoginBox from "./LoginBox";
const LoginPage = () => {
	return (
		<div className="LoginPage">
			<div className="LogoContainer"></div>
			<p>Sign in to Listify</p>
			<LoginBox />
			<Footer />
		</div>
	);
};

export default LoginPage;
