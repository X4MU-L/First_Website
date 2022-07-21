import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkWrapper = styled.div`
	display: flex;
	@media (max-width: 700px) {
		position: fixed;
		background: rgba(51, 51, 51, 0.4);
		top: 0;
		right: 0;
		left: 0;
		height: 100vh;
	}
	transition: all 0.4s ease-in-out;
	transform: ${(props) =>
		props.open || props.isMobile ? "scaleZ(1)" : "scaleZ(0)"};
`;
const UnorderedLinks = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	font-weight: 300;
	display: flex;
	gap: 50px;
	@media (max-width: 700px) {
		flex-direction: column;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		gap: 30px;
		padding: 50px 10px 10px 10px;
		background: rgb(16, 16, 16);

		width: ${(props) => (props.open ? "150px" : 0)};
	}
	transition: all 0.4s ease-in-out;
	transform: ${(props) =>
		props.open || props.isMobile ? "scaleX(1)" : "scaleX(0)"};
`;
const ListLinks = styled.li`
	border-block: 5px solid transparent;
	padding-inline: 10px;
	display: grid;
	align-items: center;
	cursor: pointer;
	transition: all 400ms ease-in-out;
	&:hover,
	&.active {
		border-bottom-color: var(--primary-color);
		color: rgb(114, 114, 114);
	}
	a {
		text-decoration: none;
		color: inherit;
	}
`;
const MobileNav = ({ links, menuOpen, isMobile, setIsMenuOpen }) => {
	const closeMenu = (e) => {
		//used to prevent event bubble
		if (e.currentTarget !== e.target) return;
		setIsMenuOpen(false);
	};

	//I'm not proud i believe this is only taking out more run time,
	//Is there a better way to fix this with no loop possibly
	const updateActiveComponent = (e) => {
		const { parentElement, classList } = e.currentTarget;
		parentElement
			.querySelectorAll("li")
			.forEach((item) => item.classList.remove("active"));
		classList.add("active");
	};

	return (
		<LinkWrapper open={menuOpen} isMobile={isMobile} onClick={closeMenu}>
			<UnorderedLinks open={menuOpen} isMobile={isMobile}>
				{links.map((item, i) => (
					<ListLinks
						key={i}
						onClick={updateActiveComponent}
						className={isHomePage(i) && "homepage"}
					>
						<Link to={isHomePage(i) ? "/" : `${item.toLocaleLowerCase()}`}>
							{item}
						</Link>
					</ListLinks>
				))}
			</UnorderedLinks>
		</LinkWrapper>
	);
};
export default MobileNav;
const isHomePage = (index) => index === 0;
