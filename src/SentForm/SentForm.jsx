import React from 'react';
import './sentFormStyles.css';
import {MdMarkEmailRead} from 'react-icons/md'

function SentForm () {
    return(
        <div className='sentFormContainer'>
            <MdMarkEmailRead></MdMarkEmailRead>
            Sent!
        </div>
    );
}

export default SentForm