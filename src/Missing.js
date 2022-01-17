import { Link } from "react-router-dom";

const Missing = () => {
	return (
		<>
			<h1>MISSING</h1>
			<h3>The page you were looking for does not exist.</h3>
			<Link to="/">Click here to return to your previous page</Link>
		</>
	);
};

export default Missing;
