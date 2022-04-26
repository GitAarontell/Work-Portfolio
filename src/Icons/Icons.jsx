import React from 'react';
import { IconContext } from 'react-icons/lib';
import './iconStyles.css';

function Icons({ icon, delay }) {

    return (
        <div className='iconsContainer'
            data-sal="slide-left"
            data-sal-delay='225'
            data-sal-duration={delay}
            data-sal-easing="ease-out-bounce">
            <IconContext.Provider value={{ className: 'icon' }}>
                {icon}
            </IconContext.Provider>
        </div>
    );

}



export default Icons