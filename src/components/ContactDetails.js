import React from 'react';

const ContactDetails = props => (
    <div>
        <h4>ContactDetails</h4>
        <p>
            {props.contact.name} {props.contact.surname}<br />
            <small>{props.contact.phone}</small><br />
            <small>{props.contact.email}</small>
        </p>
    </div>
);

export default ContactDetails;
