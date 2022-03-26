import React, {useState} from 'react';
import ContactForm from './ContactForm.jsx';
import './contactStyles.css';

function Contact () {

    let [submit, setSubmit] = useState(false);


    return(
        <div className='contactContainer'>
            <h2>Contact</h2>


           <ContactForm setSubmit={setSubmit}/>
        </div>
    );
}

export default Contact;