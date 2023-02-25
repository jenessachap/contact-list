import ContactCard from "./contactCard";
import axios from 'axios';
import React, { useState, useEffect } from "react";

const ContactList = (props) => {
    const [contactList, setContactList] = useState([])

    const getContactList = () => {
        axios.get('http://localhost:4000/contact/all-contacts')
            .then(res => {
                if (res.status === 200) {
                    setContactList(res.data.split("\n"))
                } else
                    Promise.reject()
            })
            .catch(err => alert(`Something went wrong\n ${err}`))
    }

    useEffect(() => { getContactList() }, [])
    if (props.listRefresh) { getContactList(); props.setListRefresh(false) }

    const allContacts = []
    if (contactList[contactList.length - 1] === '') contactList.pop()

    contactList.map((contact) => {
        const contactObj = contact.substring(1, contact.length - 1).split()
        const seperateContact = contactObj[0].substring(1, contact.length - 1).split(",")
        const contactDetails = []

        seperateContact.map(contactDetail => {
            contactDetail = contactDetail.split(":")
            if (contactDetail[1]) contactDetails.push(contactDetail[1])
        })
        allContacts.push(<ContactCard contact={contactDetails} key={contactDetails[1]} />)
    })

    return (
        <div className="contact-list-container">
            {allContacts}
        </div>
    )

}

export default ContactList
