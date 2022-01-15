import Header from "./Header.js";
import Main from "./Main.js";
const MainPage = ({ logoutFunction }) => {
	return (
		<>
			<Header logoutFunction={logoutFunction} />
			<Main />
		</>
	);
};

export default MainPage;
