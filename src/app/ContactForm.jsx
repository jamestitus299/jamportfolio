import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	message: Yup.string()
		.required("Message is required")
		.min(25, "Message should be atleast 25 characters long"),
});

const ContactForm = () => {
	var service_id = "service_he9wjde";
    // var template_id = "your_template_id";
	const subject = "Regarding your services";
	const toEmail = "jamestitus299@gmail.com";

	const sendMail = async (values) => {
    const { name, email, message } = values;
		// alert(name + email + message);
		await emailjs.send(service_id, {
			to: toEmail,
			from: email,
			subject: subject,
			text: `
        ${message}
        '\n\n'
        ${name}
    `,
		});

		const notification = new Notification("Mail sent successfully!");
		notification.onclick = () => {
			notification.close();
		};
	};

	return (
		<Formik
			initialValues={{ name: "", email: "", message: "" }}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				sendMail(values);
				resetForm();
				setSubmitting(false);
			}}
		>
			{({ isSubmitting }) => (
				<Form className="max-w-md mx-auto p-6 border rounded-lg shadow-lg border-black dark:border-white">
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block mb-2 font-bold  dark:text-white text-center"
						>
							Name
						</label>
						<Field
							type="text"
							name="name"
							className="w-full p-2 border rounded"
						/>
						<ErrorMessage
							name="name"
							component="div"
							className="text-red-600 text-xs mt-1"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block mb-2 font-bold  dark:text-white text-center"
						>
							Email
						</label>
						<Field
							type="email"
							name="email"
							className="w-full p-2 border rounded"
						/>
						<ErrorMessage
							name="email"
							component="div"
							className="text-red-600 text-xs mt-1"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="message"
							className="block mb-2 font-bold  dark:text-white text-center"
						>
							Message
						</label>
						<Field
							as="textarea"
							name="message"
							className="w-full p-2 border rounded"
							rows="4"
						/>
						<ErrorMessage
							name="message"
							component="div"
							className="text-red-600 text-xs mt-1"
						/>
					</div>
					<button
						type="submit"
						disabled={isSubmitting}
						className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
					>
						{/* <a href="mailto:jamestitus299@gmail.com">Contact</a> */}
						Contact
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default ContactForm;
