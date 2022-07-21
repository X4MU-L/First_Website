import styled from "styled-components";
import "../../App.css";
const WrapperDiv = styled.div`
	display: grid;
	width: 100%;
	grid-gap: 50px;
	grid-template-columns: 1fr auto;
	align-items: center;
`;
const ContainerDiv = styled.div`
	height: 5px;
	width: 100%;
	background-color: rgb(114, 114, 114);
	border-radius: 50px;
`;

const FillerDiv = styled.div`
	height: 100%;
	width: ${(props) => props.completed}%;
	background-color: white;
	border-radius: inherit;
	text-align: right;
`;
const LabelText = styled.span`
	color: var(--primary-color);
	font-weight: 200;
`;
const LabelParagragh = styled.p`
	margin: 0;
	text-transform: uppercase;
	color: white;
`;
const ProgressBar = (props) => {
	const { completed, label } = props;

	return (
		<>
			<LabelText>{`${completed}%`}</LabelText>
			<WrapperDiv>
				<ContainerDiv>
					<FillerDiv completed={completed}></FillerDiv>
				</ContainerDiv>
				<LabelParagragh className="bold">{label}</LabelParagragh>
			</WrapperDiv>
		</>
	);
};

export default ProgressBar;
