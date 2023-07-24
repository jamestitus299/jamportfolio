import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
    const subject = 'Regarding your services';
    const toEmail = "jamestitus299@gmail.com";
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Handle form submission logic here
        // console.log(values);
        // window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-4 border rounded-lg shadow-lg ">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold  dark:text-white text-center">
              Name
            </label>
            <Field
              type="text"
              name="name"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold  dark:text-white text-center">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold  dark:text-white text-center">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              className="w-full p-2 border rounded"
              rows="4"
            />
            <ErrorMessage name="message" component="div" className="text-red-600 text-xs mt-1" />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
            // href="mailto:jamestitus299@gmail.com"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
