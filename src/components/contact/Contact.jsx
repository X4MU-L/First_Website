import styled from "styled-components";
import ContactsDetails from "./ContactsDetails";
import ContactForm from "./ContactForm";

const ContactWrapper = styled.section`
	color: white;
	align-items: center;
	padding-inline: 75px;
	font-size: 1.3rem;
	display: grid;
	div.gl {
		display: grid;
		justify-content: center;
		grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
		grid-gap: 20px;
	}
	@media (max-width: 700px) {
		align-content: end;
	}
	@media (max-width: 600px) {
		padding-inline: 25px;
		font-size: 1.1rem;
		padding-bottom: 30px;
	}
`;
const senderObject = {
	email: "",
	name: "",
	message: "",
	button: "Let's Talk",
};
const myInfo = {
	heading: "Connect with Me",
	email: "okolisamuel21@outlook.com",
	phone: "+234 902 736 0483",
	location: "Abuja, Nigeria",
};

//IS THIS RIGHT OR WRONG AS A CHANGE TO THESE VALUES WILL AFFECT THE FORM?

const Contact = () => {
	return (
		<ContactWrapper>
			<div className="gl">
				<ContactsDetails myInfo={myInfo} />
				<ContactForm senderObject={senderObject} />
			</div>
		</ContactWrapper>
	);
};
export default Contact;
