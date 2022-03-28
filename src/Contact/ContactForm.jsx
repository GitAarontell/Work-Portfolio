import React from 'react';
import emailjs from "emailjs-com";
import './contactStyles.css';

function ContactForm () {

    const sendEmail = (e) => {
        e.preventDefault();
        console.log("ello puppet");
        emailjs.sendForm('service_otshkmn', 'contact_form', e.target, '0wcWXpnJcki7LiBGR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return(
            <form className='formContainer' onSubmit={sendEmail} required>
                <input type="text" name='name' className= 'nameContainer widthSet' placeholder='  Enter name' required/>
                <input type='email' name='email' className='nameContainer widthSet' placeholder='  Email Address' required></input>
                <textarea name="message" className='widthSet' id="message" placeholder='  Message' ></textarea>

                <button type='submit'>Submit</button>
            </form>
    );


}

export default ContactForm;