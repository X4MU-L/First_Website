import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import "../../App.css";
import Construction from "./Construction";
const PortfolioContainer = styled.section`
	display: grid;
	align-items: center;
	padding-top: 100px;
	padding-inline: 50px;
	color: white;
	font-size: 2rem;
	font-weight: 600;

	@media (max-width: 400px) {
		padding-inline: 25px;
		div.wrapper {
			grid-gap: 25px;
		}
	}
`;
const PortfolioWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-auto-rows: 200px;
	grid-gap: 50px;
	a {
		display: grid;
		color: inherit;
		text-decoration: none;
	}
`;
const PortfolioDiv = styled.div`
	display: grid;
	border-radius: 30px;
	background: ${(props) => props.color};
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
`;
const Paragraph = styled.h4`
	grid-row: 1/-1;
	grid-column: 1/-1;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	align-items: center;
	justify-items: center;
`;
const prorfolioItems = [
	"Web Designs",
	"Design",
	"Contributions",
	"Developing",
	"Tools",
	"Interactives",
];

const allPortfolioBackgroundColor = {
	"Web Designs": "rgb(253,163,129)",
	Design: "rgb(222,36,97)",
	Contributions: "rgb(173,159,244)",
	Developing: "var(--primary-color)",
	Tools: "rgb(61,104,95)",
	Interactives: "rgb(102,201,147)",
};

const Portfolio = () => {
	const backgroundColor = portfolioBackground(allPortfolioBackgroundColor);
	return (
		<PortfolioContainer>
			<PortfolioWrapper>
				{prorfolioItems.map((item, i) => (
					<Link to="construction" key={i}>
						<PortfolioDiv color={`${backgroundColor(item)}`} key={item}>
							<Paragraph>{item}</Paragraph>
						</PortfolioDiv>
					</Link>
				))}
			</PortfolioWrapper>
			<Routes>
				<Route path="construction" element={<Construction />} />
			</Routes>
		</PortfolioContainer>
	);
};
export default Portfolio;
const portfolioBackground = (object) => {
	let color = "";
	const retunFunction = (bgNames) => {
		Object.keys(object).forEach((key) => {
			if (key === bgNames) {
				color = object[key];
			}
		});
		return color;
	};
	return retunFunction;
};
