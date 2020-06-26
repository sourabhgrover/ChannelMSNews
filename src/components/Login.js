import React from "react";
import { Formik } from "formik";

class Login extends React.Component {
    render() {
        return (
            <div>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log("Logging in", values);
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <h1>Validated Login Form</h1>
                </Formik>
            </div>);
    }
}

export default Login;
