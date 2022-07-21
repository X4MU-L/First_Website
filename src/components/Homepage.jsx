import styled from "styled-components";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
const HomepageWrapper = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;
`;
const Homepage = ({ isMobile }) => {
	return (
		<HomepageWrapper>
			<Navbar isMobile={isMobile} />
			<Routes>
				<Route path="/" element={<Hero isMobile={isMobile} />} />
				<Route path="about" element={<About />} />
				<Route path="portfolio/*" element={<Portfolio />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</HomepageWrapper>
	);
};
export default Homepage;
