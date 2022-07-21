// This Page is redundant

import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import { CtaButton } from "../Hero";
import { Link } from "react-router-dom";
import AboutImage from "../../assets/images/allec-gomes-dmLIDt7xZNA-unsplash.jpg";
const AboutWrapper = styled.section`
	padding-top: 100px;
	padding-inline: 50px;
	grid-gap: 50px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	color: white;
	font-size:1.1rem;
	p {
		
		font-weight: 200;
	}
	p.bold {
		font-weight: 500;
	}
	@media (max-width: 649px) {
	 *{
		font-size: 0.8rem;
	}
	
`;
const AboutDiv = styled.section``;
const AboutImageWrapper = styled.section`
	width: 100%;
	background-image: url(${AboutImage});
	background-size: cover;
	background-position: center;
	height: 100%;
`;
const About = () => {
	return (
		<AboutWrapper>
			<AboutDiv>
				<p>Hi again, thanks for checking out my page.</p>
				<p>
					My name is Samuel Okoli and I'm a frontend developer from
					Abjua,Nigeria. I have got quite a few skills and will be honored to
					employ them to your project.
				</p>
				<ProgressBar completed={"91"} label={"html"} />
				<ProgressBar completed={"80"} label={"css"} />
				<ProgressBar completed={"79"} label={"sass"} />
				<ProgressBar completed={"85"} label={"react"} />
				<ProgressBar completed={"80"} label={"javascript"} />
				<br />
				<Link to="/contact">
					<CtaButton>Hire me</CtaButton>
				</Link>
			</AboutDiv>
			<AboutImageWrapper>
				<p>Hi again, thanks for checking out my page.</p>
				<p>
					My name is Samuel Okoli and i'm a frontend developer from
					Abjua,Nigeria. I have got quite a few skills and will be honored to
					employ them to your project.
				</p>
			</AboutImageWrapper>
		</AboutWrapper>
	);
};
export default About;
