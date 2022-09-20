import React from "react";


export default function ContactCard(props) {
    return (
        <div className="fortyFiveContainer contact">
            Contact:
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Message: {props.message}</p>
        </div>
    )
};