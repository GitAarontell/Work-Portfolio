import React from 'react';
import emailjs from "emailjs-com";
import './contactStyles.css';

function ContactForm ({setSent}) {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_otshkmn', 'contact_form', e.target, '0wcWXpnJcki7LiBGR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setSent(false);
    };

    return(
            <form className='formContainer' onSubmit={sendEmail} required
            data-sal="slide-up"
            data-sal-delay='225'
            data-sal-duration='500'
            data-sal-easing="ease-out-bounce">
                <input type="text" name='name' className= 'nameContainer widthSet' placeholder='  Enter name' required/>
                <input type='email' name='email' className='nameContainer widthSet' placeholder='  Email Address' required></input>
                <input type="text" name="subject" className='widthSet' id="subject" placeholder='  Subject' ></input>
                <textarea name="message" className='widthSet' id="message" placeholder='  Message' ></textarea>
                <button type='submit'>Submit</button>
            </form>
    );


}

export default ContactForm;