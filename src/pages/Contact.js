import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [contactName, setContactName] = useState('');
    const [message, setMessage] = useState('');
    const [noNameMessage, setNoNameMessage] = useState('');
    const [noEmailMessage, setNoEmailMessage] = useState('');
    const [noMessageMessage, setNoMessageMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
            if (inputValue.trim() === '') {
                setNoEmailMessage('Required field!')
            } else {
                setNoEmailMessage('')
            }
        } else if (inputType === 'name') {
            setContactName(inputValue);
            if (inputValue.trim() === '') {
                setNoNameMessage('Required field!')
            } else {
                setNoNameMessage('')
            }
        } else {
            setMessage(inputValue);
            if (inputValue.trim() === '') {
                setNoMessageMessage('Required field!')
            } else {
                setNoMessageMessage('')
            }
        }
    };
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
  
        if (!validateEmail(email)) {
        setErrorMessage('Your email is invalid!');
        return;
        }
        alert(`Message Sent!`);
    
        setContactName('');
        setEmail('');
        setMessage('');
    };
  
    return (
        <section className="flexy bodySec">
            <div className="flexy fortyNineContainer mainStuff">
                <h3>
                    Contact
                </h3>
                <form className='fullContainer'>
                    <div>
                        <label for="contactFormName">
                            Name:
                        </label>
                        <br/>
                        <input
                            value={contactName}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            id="contactFormName"
                            required
                        />
                        {noNameMessage && (
                            <div className="errMsg">
                                {noNameMessage}
                            </div>
                        )}
                    </div>
                    <div>
                        <label for="contactFormEmail">
                            Email:
                        </label>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            id="contactFormEmail"
                            required
                        />
                        {noEmailMessage && (
                            <div className="errMsg">
                                {noEmailMessage}
                            </div>
                        )}
                    </div>
                    <div>
                        <label for="contactFormMessage">
                            Message:
                        </label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            id="contactFormMessage"
                            required
                        />
                        {noMessageMessage && (
                            <div className="errMsg">
                                {noMessageMessage}
                            </div>
                        )}
                    </div>
                    {errorMessage && (
                        <div className="errMsg">
                            <p>{errorMessage}</p>
                        </div>
                    )}
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
            </div>
        </section>
    );
  }