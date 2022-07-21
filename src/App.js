import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Homepage from "./components/Homepage";
import { useState, useEffect } from "react";
import Construction from "./components/portfolio/Construction";

function App() {
	const [isMobile, setIsMobile] = useState(false);
	//choose the screen size
	const handleResize = () => {
		if (window.innerWidth > 700) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		handleResize();
	}, []);
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/*" element={<Homepage isMobile={isMobile} />} />
					<Route path="/portfolio/construction/" element={<Construction />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
