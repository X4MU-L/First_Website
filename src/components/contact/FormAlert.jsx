import styled from "styled-components";
import { ReactComponent as Check } from "../../assets/images/checkbox-circle-line.svg";
import { ReactComponent as Error } from "../../assets/images/error-warning-line.svg";

const AlertWrapper = styled.div`
	position: fixed;

	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.3s ease-in-out;
	transform: ${(props) =>
		props.open ? "scaleY(1) scaleX(1)" : "scaleY(0) scaleX(0)"};
`;
const AlertDisplay = styled.div`
	padding: 50px;
	border: 3px solid var(--primary-color);
	background: white;
	border-radius: 30px;
	display: grid;
	@media (max-width: 400px) {
		padding: 30px;
	}
`;
const ItemWrapper = styled.div`
	display: grid;
	justify-items: center;
`;
const AlertText = styled.p`
	color: ${(props) => (props.color ? "#19bc9b" : "#E74C3C")};
	font-weight: 600;
	text-align: center;
`;
const IconWrapper = styled.div``;
const CheckIcon = styled(Check)`
	width: 64px;
	height: 64px;
`;
const FormAlert = ({ showAlert, alertValue }) => {
	return (
		<AlertWrapper open={showAlert}>
			<AlertDisplay>
				<ItemWrapper>
					<IconWrapper>
						{alertValue && <CheckIcon />}
						{!alertValue && <Error />}
					</IconWrapper>
					<AlertText color={alertValue}>{alert(alertValue)}</AlertText>
				</ItemWrapper>
			</AlertDisplay>
		</AlertWrapper>
	);
};
export default FormAlert;
const alert = (value) => {
	let result = "Server busy at this time, please try again";
	if (value) {
		result = "Message Sent Successfully";
	}
	return result;
};
