
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ContactCard = (props) => {
    const name = props.contact[0].replace(/['"]+/g, "")
    const email = props.contact[1].replace(/['"]+/g, "")
    const address = props.contact[2].replace(/['"]+/g, "")

    return (
        <div>
            <Card body>
                <div className="contact-card">
                    <Col>
                        {name}
                    </Col>
                    <Col>
                        {email}
                    </Col>
                    <Col>
                        {address}
                    </Col>
                </div>
            </Card>
        </div >
    )
}

export default ContactCard;
