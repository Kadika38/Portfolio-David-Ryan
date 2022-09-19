import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACTS } from '../utils/queries';

export default function ViewContacts() {
const [contacts, setContacts] = useState([]);

    const { data, loading } = useQuery(GET_CONTACTS, {
        onCompleted: newData => {
            setContacts(newData);
        }
    })

    return (
        <section className="flexy bodySec">
            <div className="flexy mainStuff">
                Im scary terry
            </div>
        </section>
    );
};