import React from 'react';
import ContactForm from '../Contact/ContactForm';
import SentForm from '../SentForm/SentForm';

function Switch ({sent, setSent}) {
    if (sent) {
        return <ContactForm setSent={setSent}></ContactForm>
    } else {
        return <SentForm></SentForm>
    }
}

export default Switch