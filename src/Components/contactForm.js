import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button, FormLabel, FloatingLabel } from "react-bootstrap";

const ContactForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string()
            .email("You have enter an invalid email address")
            .required("Required"),
        address: Yup.string(),
    });
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form className="form">
                    <FormGroup className="form-input">
                        <FloatingLabel controlId="floatingInputGrid" label="Name">
                            <Field name="name" type="text" placeholder="Name"
                                className="form-control" />
                            <ErrorMessage
                                name="name"
                                className="d-block invalid-feedback"
                                component="span"
                            />
                        </FloatingLabel>
                    </FormGroup>
                    <FormGroup className="form-input">
                        <FloatingLabel controlId="floatingInputGrid" label="Email">
                            <Field name="email" type="text" placeholder="Email"
                                className="form-control" />
                            <ErrorMessage
                                name="email"
                                className="d-block invalid-feedback"
                                component="span"
                            />
                        </FloatingLabel>
                    </FormGroup>
                    <FormGroup className="form-input">
                        <FloatingLabel controlId="floatingInputGrid" label="Address">
                            <Field name="address" type="text" placeholder="Address"
                                className="form-control" />
                            <ErrorMessage
                                name="address"
                                className="d-block invalid-feedback"
                                component="span"
                            />
                        </FloatingLabel>
                    </FormGroup>
                    <div className="d-grid gap-2">
                        <Button variant="dark" size="lg"
                            block="block" type="submit" className="form-input">
                            Add Contact
                        </Button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
