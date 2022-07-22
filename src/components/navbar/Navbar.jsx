import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../assets/images/menu-line.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/close-line.svg";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

const NavWapper = styled.nav`
	height: 80px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 10;
	left: 0;
	font-family: poppins;
	font-size: 1.1rem;
	color: white;
	display: flex;
	flex: 1 1 100%;
	padding-inline: 50px;
	justify-content: space-between;
	transition: all 0.4s ease-in-out;
	background: ${(props) => (props.background ? "var(--primary-color)" : "")};
	box-shadow: ${(props) =>
		props.background ? "1px 2px 5px rgba(1,1,1,.3)" : ""};
	@media (max-width: 700px) {
		padding-inline: 25px;
	}
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	div {
		cursor: pointer;
		font-weight: 600;
		a {
			text-decoration: none;
			color: inherit;
		}
	}
`;

const LogoDivWrapper = styled.div``;
const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	@media (min-width: 700px) {
		display: none;
	}
	svg {
		width: 30px;
		height: 30px;
	}
	svg.closeIcon {
		position: relative;
	}
`;

const links = ["About", "Portfolio", "Contact"];
const Navbar = ({ isMobile }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scroll, setScroll] = useState(false);

	const scrollHeader = () => {
		if (window.scrollY >= 80) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", scrollHeader);
	}, []);

	const deselectActive = (e) => {
		const { nextElementSibling } = e.currentTarget;
		const active = nextElementSibling.querySelector(".active");
		nextElementSibling.querySelector(".homepage");
		active && active.classList.remove("active");
		nextElementSibling.querySelector(".homepage").classList.add("active");
	};
	return (
		<NavWapper background={scroll}>
			<LogoContainer onClick={deselectActive}>
				<LogoDivWrapper>
					<Link to="/">samuelcode</Link>
				</LogoDivWrapper>
			</LogoContainer>
			<MobileNav
				setIsMenuOpen={setIsMenuOpen}
				menuOpen={isMenuOpen}
				isMobile={isMobile}
				links={links}
			/>
			<IconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{!isMenuOpen && <MenuIcon />}
				{isMenuOpen && <CloseIcon className="closeIcon" />}
			</IconWrapper>
		</NavWapper>
	);
};
export default Navbar;
