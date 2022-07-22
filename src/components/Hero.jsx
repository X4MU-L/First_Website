import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ReactComponent as RestIcon } from "../assets/images/rest-time-line.svg";
import "../App.css";
import SwiperComponent from "./swiper/SwiperComponent";
const HeroWrapper = styled.div`
	padding-top: 150px;
	padding-inline: 50px;
	font-size: 1.5rem;
	color: white;
	font-family: poppins;
	.hero {
		display: flex;
		justify-content: space-between;
	}
`;

const HeroIntro = styled.p`
	text-transform: uppercase;
	font-weight: 500;
`;
const HeroName = styled.p`
	text-transform: lowercase;
	color: var(--primary-color);
	font-size: 3.5rem;
	font-weight: 400;
	margin: 0;
`;
const HeroH2 = styled.h2`
	font-size: 1.5rem;
	margin-bottom: 0;
	span {
		width: 0.4rem;
		height: 0.4rem;
		text-align: center;
		margin: 0.32rem;
		display: inline-block;
		background: var(--primary-color);
		transform: rotate(45deg);
	}
`;
const Heroh1 = styled.h1`
	margin-top: 0;
	font-size: 1.1rem;
	font-weight: 100;
`;
export const CtaButton = styled.button`
	outline: none;
	border: none;
	background-color: var(--primary-color);
	color: white;
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 2px;
	font-size: 1.1rem;
	width: 150px;
	padding-block: 10px;
	border-radius: 50px;
	transition: all 300ms ease-in-out;
	&:hover {
		color: var(--primary-color);
		background-color: white;
	}
	&:active {
		transform: scale(0.9);
	}
`;
const DateWrapper = styled.div`
	margin-top: 30px;
	display: flex;
	gap: 10px;
	justify-content: flex-end;
	align-items: center;
	.date {
		font-size: 5rem;
		color: transparent;
		-webkit-text-stroke: 0.7px white;
		display: flex;
	}
	.week {
		font-weight: 200;
		@media (max-width: 400px) {
			font-size: 0.9em;
		}
	}
`;

const AvailablePtag = styled.p`
	margin: 0;
	font-size: 0.9em;
	@media (max-width: 400px) {
		font-size: 0.6em;
	}
`;
const BlinkerWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;
const Blinker = styled.span`
	width: 13px;
	height: 13px;
	background: #00ff00;
	box-shadow: 0px 1px 4px 1px rgba(25, 188, 155, 0.4),
		0px 1px 4px 1px rgba(25, 188, 155, 0.4),
		0px 1px 4px 1px rgba(25, 188, 155, 0.4),
		0px 1px 4px 1px rgba(25, 188, 155, 0.4),
		0px 1px 4px 1px rgba(25, 188, 155, 0.4);
	border-radius: 50%;
`;
const RestButton = motion(RestIcon);
const Hero = ({ isMobile }) => {
	const date = new Date().getDate();
	const time = new Date().getHours();
	const week = new Date().toDateString().slice(0, 3);
	const Icon = getAvailabilityIcon(availability(time));
	return (
		<HeroWrapper>
			<div className="hero">
				<div>
					<HeroIntro>Hi There, I'm</HeroIntro>
					<HeroName>Samuel</HeroName>
					<HeroH2>
						Developer <span></span> Designer
					</HeroH2>
					<Heroh1>
						I'm a funtionality-driven, creative frontend developer.
					</Heroh1>
					<Link to="/contact">
						<CtaButton>Hire me</CtaButton>
					</Link>
				</div>
				{isMobile && <SwiperComponent />}
			</div>
			<DateWrapper>
				<div className="date">{dateFromZero(date)}</div>
				<div>
					<div className="week">{daysOfWeek(week)}</div>
					<BlinkerWrapper>
						<AvailablePtag>{availability(time)}</AvailablePtag>
						<div>
							{Icon && (
								<Blinker
									as={motion.div}
									animate={{ opacity: [0, 1, 0] }}
									transition={{ repeat: Infinity, duration: 2.5 }}
								/>
							)}
							{!Icon && (
								<RestButton
									animate={{ x: [1, 0, 1, 3] }}
									transition={{
										type: "tween",
										repeat: Infinity,
										duration: 1,
									}}
								/>
							)}
						</div>
					</BlinkerWrapper>
				</div>
			</DateWrapper>
		</HeroWrapper>
	);
};
export default Hero;

const dateFromZero = (date) => {
	let num = "0";
	if (date < 10) {
		num += date;
		date = num;
	}
	return date;
};

const daysOfWeek = (week) => {
	const weeks = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	let result;
	for (const x of weeks) {
		if (week === x.slice(0, 3)) {
			result = x;
			return result;
		}
	}
};
const availability = (time) => {
	let message;
	if (time < 6 || time > 21) {
		let hours;
		if (time < 6) {
			hours = 5;
			hours -= time;
			message = `Be up in ${hours} hours`;
			return message;
		}
		hours = 30;
		hours -= time;
		message = `Be up in ${hours} hours`;
		return message;
	}
	message = `Available for work`;
	return message;
};
const getAvailabilityIcon = (value) => {
	if (value === "Available for work") return true;
	return false;
};
