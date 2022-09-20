import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../../utils/queries';
import ContactCard from './components/ContactCard';

export default function ViewContacts() {
    const [contacts, setContacts] = useState([]);
    const [firstRender, setFirstRender] = useState(true);

    const { data, loading } = useQuery(GET_CONTACTS, {
        onCompleted: newData => {
            if (firstRender) {
                setContacts(newData.getContacts);
                console.log(newData.getContacts);
                setFirstRender(false);
            }
        }
    });

    return (
        <section className="flexy bodySec">
            <div className="flexy fullContainer mainStuff">
                {contacts.map((contact) => {
                    return (
                        <ContactCard name={contact.name} email={contact.email} message={contact.message} contactId={contact._id} />
                    )
                })}
            </div>
        </section>
    );
};