import React from 'react';
import Switch from '../Switch/Switch.jsx';
import './contactStyles.css';

function Contact ({offSetY, sent, setSent}) {
    return(
        <div id='contactContainer' className='contactContainer' style={{ transform: `translateY(${offSetY * 0.8}px)` }}>
            <h2>Contact</h2>
           <Switch sent={sent} setSent={setSent}></Switch>
        </div>
    );
}

export default Contact;