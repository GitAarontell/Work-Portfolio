import React, {useState} from 'react';
import './contactStyles.css';

function ContactForm ({setSubmit}) {
 
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [comment, setComment] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        let obj = {
            name: name,
            email: email,
            comment: comment,
            _captcha: false
        }

        const response = await fetch('https://formsubmit.co/c71ede746d622cebc4391831d6998860',
        {
            method: 'POST',
            data: JSON.stringify(obj),
            dataType: "json"
        }).then(res => {
            console.log('done');
        });
        console.log(response);
        setSubmit(true);
    };


    return(
            <form className='formContainer'  required>
                <input onChange={ e => setName(e.target.value)} type="text" name='usrName' className= 'nameContainer widthSet' placeholder='  Enter name' required/>
                <input onChange={ e => setEmail(e.target.value)}type='text' name='email' className='nameContainer widthSet' placeholder='  Email Address' required></input>
                <textarea onChange={ e => setComment(e.target.value)}name="Comment" className='widthSet' id="comments" placeholder='  Enter comments here...' ></textarea>

                <button onClick={() => handleSubmit}>Submit</button>
            </form>
    );


}

export default ContactForm;