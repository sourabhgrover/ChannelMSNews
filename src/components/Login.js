import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// import './login.css';



const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(7, "Password must be 7 characters at minimum")
        .required("Password is required")
});

class Login extends React.Component {
    render() {

        return (

            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={LoginValidationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values);
                        alert("Form is validated! Submitting the form...");
                        setSubmitting(false);
                    }}
                >
                    {
                        ({ touched, errors, isSubmitting }) => (
                            <Form>

                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className={`form-control ${
                                        touched.email && errors.email ? "is-invalid" : ""
                                        }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-feedback"
                                />



                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className={`form-control ${
                                        touched.password && errors.password ? "is-invalid" : ""
                                        }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="password"
                                    className="invalid-feedback"
                                />


                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Please wait..." : "Submit"}
                                </button>
                            </Form>
                        )}
                </Formik>
            </div >);
    }
}

export default Login;
