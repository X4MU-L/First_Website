import styled from "styled-components";
import { ReactComponent as Mail } from "../../assets/images/mail-line.svg";
import { ReactComponent as Phone } from "../../assets/images/phone-line.svg";
import { ReactComponent as Location } from "../../assets/images/map-pin-user-fill.svg";

const ContactInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	div {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	svg {
		width: 30px;
		height: 30px;
	}
`;
const ConstactHeading = styled.h3`
	text-transform: uppercase;
	margin-top: 0;
	border-bottom: 3px solid rgb(205, 205, 205);
	padding-bottom: 20px;
`;
const InfoContainerDiv = styled.div``;
const ContactInfo = styled.p`
	font-weight: 200;
	font-size: 0.9em;
`;

const ContactsDetails = ({ myInfo }) => {
	return (
		<ContactInfoWrapper>
			<ConstactHeading>{myInfo.heading}</ConstactHeading>
			<InfoContainerDiv>
				<Mail />
				<ContactInfo>{myInfo.email}</ContactInfo>
			</InfoContainerDiv>
			<InfoContainerDiv>
				<Phone />
				<ContactInfo>{myInfo.phone}</ContactInfo>
			</InfoContainerDiv>
			<InfoContainerDiv>
				<Location />
				<ContactInfo>{myInfo.location}</ContactInfo>
			</InfoContainerDiv>
		</ContactInfoWrapper>
	);
};

export default ContactsDetails;
