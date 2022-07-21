import styled from "styled-components";
import { ReactComponent as ConstructionImage } from "../../assets/images/construction.svg";

const Container = styled.section`
	height: 100vh;
	background: white;
`;
const Wrapper = styled.div`
	width: 100%;
	height: calc(100vh - 174.4px);
	svg {
		width: inherit;
		height: inherit;
	}
`;
const Header = styled.h4`
	margin: 0;
	padding: 50px;
	font-size: 2rem;
	text-align: center;
`;
const Construction = () => {
	return (
		<Container>
			<Header>Undergoing construction</Header>
			<Wrapper>
				<ConstructionImage />
			</Wrapper>
		</Container>
	);
};
export default Construction;
