import styled from "styled-components";
import { CtaButton } from "../Hero";
import { useState, useRef } from "react";
import { regexExpression } from "./Regex";
import emailjs from "@emailjs/browser";
import FormAlert from "./FormAlert";

const FormWrapper = styled.section`
	width: 100%;
`;
const Form = styled.form`
	display: grid;
	grid-gap: 30px;
	@media (max-width: 968px) {
		grid-gap: 10px;
	}
	.error {
		color: #e74c3c;
		margin: 0;
		font-size: 0.8rem;
		text-align: center;
	}
	div {
		width: 100%;
		display: grid;
	}
`;

const FormInput = styled.input.attrs({
	type: "text",
	placeholder: "E-mail",
	name: "email",
})`
	height: 15px;
	border: 3px solid transparent;
	outline: none;
	display: block;
	padding: 10px 25px;
	color: black;
	font-size: 1.1em;
	font-weight: 500;
	letter-spacing: 1px;
	background-color: rgb(205, 205, 205);
	border-radius: 50px;

	::-webkit-input-placeholder {
		letter-spacing: 0;
		font-size: 0.8em;
		color: rgb(82, 82, 82);
		font-weight: 600;
	}
	::-moz-placeholder {
		color: rgb(82, 82, 82);
	}
	:focus {
		border-color: var(--primary-color);
		background-color: white;
	}
`;
const NameInput = styled(FormInput).attrs({
	placeholder: "Name",
	name: "name",
})``;
const MessageInput = styled(FormInput).attrs({
	rows: 6,
	placeholder: "Message",
	name: "message",
})`
	border-radius: 15px;
	height: unset;
	resize: none;
	overflow: hidden;
`;
const Button = styled(CtaButton)`
	width: 100%;
	z-index: 1;
	transition: 0.35s ease-in-out;
	transform: scaleY(0) scaleX(0);
	&.focused {
		transform: scaleY(1);
	}
`;

const ContactForm = ({ senderObject }) => {
	const [formvalue, setFormValue] = useState(senderObject);
	const [focused, setFocus] = useState(false);
	const [inputError, setInputError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const [alert, setAlert] = useState(null);
	const [showAlert, setShowAlert] = useState(false);
	const form = useRef();
	const isValueEmpty = checkedObjectValues(formvalue); //check if all inputs are empty
	const btnRenderCondition = isValueEmpty || focused || inputError.name; //returns either truety or falsey

	//Onchange event with which i want to set the value of the inputs
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValue({ ...formvalue, [name]: value });
	};

	//OnSubmit function to submit the form

	const handleError = () => {
		if (Object.keys(inputError).length === 0 && isSubmit) {
			const YOUR_SERVICE_ID = "service_jvrtlwb";
			const YOUR_TEMPLATE_ID = "contact_form";
			const YOUR_PUBLIC_KEY = "hzX_NGe3tAnxN6OEW";
			emailjs
				.sendForm(
					YOUR_SERVICE_ID,
					YOUR_TEMPLATE_ID,
					form.current,
					YOUR_PUBLIC_KEY
				)
				.then(
					(result) => {
						setAlert(true);
						setShowAlert(true);
						setTimeout(() => setShowAlert(false), 3000);
						setFormValue(senderObject);
						console.log(result.text);
					},
					(error) => {
						setAlert(false);
						setShowAlert(true);
						setTimeout(() => setShowAlert(false), 3000);
						console.log(error.text);
					}
				);
		}
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setInputError(validate(formvalue));
		setIsSubmit(true);
		handleError();
	};

	return (
		<FormWrapper>
			<Form ref={form} onSubmit={handleSubmit}>
				<div>
					<FormInput
						autoFocus
						onFocus={() => setFocus(true)}
						onBlur={() => setFocus(false)}
						value={formvalue.email}
						onChange={handleChange}
					/>
					<p className="error">{inputError.email || inputError.name}</p>
				</div>
				<NameInput
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onChange={handleChange}
					value={formvalue.name}
				></NameInput>
				<MessageInput
					as="textarea"
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onChange={handleChange}
					value={formvalue.message}
				></MessageInput>
				{
					<Button className={btnRenderCondition && "focused"}>
						{senderObject.button}
					</Button>
				}
			</Form>
			{<FormAlert showAlert={showAlert} alertValue={alert} />}
		</FormWrapper>
	);
};
export default ContactForm;

const checkedObjectValues = (obj) => {
	let state = false;
	Object.values(obj).forEach((item) => {
		if (item.trim().length && item !== "Let's Talk") {
			state = true;
		}
	});
	return state;
};
const validate = (values) => {
	const errors = {};
	const regex = regexExpression;
	if (!values.email) {
		errors.email = "Please provide an email address";
	} else if (!regex.test(values.email)) {
		errors.email = "Please provide a valid email";
	}
	if (!values.name || !values.message) {
		errors.name = "Please check that you've provided required fields";
	}
	return errors;
};
