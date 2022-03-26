import React from 'react';
import { IconContext } from 'react-icons/lib';
import './iconStyles.css';

function Icons ({icon}) {

    return(
        <div className='iconsContainer'>
            <IconContext.Provider value={{className:'icon'}}>
                {icon}
            </IconContext.Provider>
        </div>
    );
    
}



export default Icons