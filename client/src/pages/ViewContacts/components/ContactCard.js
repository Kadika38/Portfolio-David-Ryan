import React from "react";
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT } from "../../../utils/mutations";


export default function ContactCard(props) {
    const [deleteContact] = useMutation(DELETE_CONTACT);

    return (
        <div className="fortyFiveContainer contact">
            Contact:
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Message: {props.message}</p>
            <button onClick={() => {deleteContact({ variables: { contactId: props.contactId } }); console.log("deleted...?")}} >Delete</button>
        </div>
    )
};