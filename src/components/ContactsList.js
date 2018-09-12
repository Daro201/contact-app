import React from 'react';

const ContactsList = props => (
    <ul>
        {props.contacts.map(contact => (
            <li key={contact.id} onClick={() => props.clickContactHandler(contact)}>
                {contact.name} {contact.surname}<br />
                <small>{contact.phone}</small>
            </li>
        ))}
    </ul>
);

export default ContactsList;
