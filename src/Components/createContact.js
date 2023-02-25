import React, { useState, useEffect } from "react";
import axios from 'axios';
import ContactForm from "./contactForm";

// CreateContact Component
const CreateContact = (props) => {
    const [formValues, setFormValues] =
        useState({ name: '', email: '', address: '' })

    const onSubmit = (contactObject, { resetForm }) => {
        axios.post(
            'http://localhost:4000/contact/create-contact',
            contactObject)
            .then(res => {
                if (res.status === 200) {
                    resetForm({ name: '', email: '', address: '' })
                    props.onHide()
                } else
                    Promise.reject()
            })
            .catch(err => alert(`Something went wrong\n ${err}`))
    }

    return (
        <ContactForm
            initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
        </ContactForm>
    )
}

export default CreateContact
