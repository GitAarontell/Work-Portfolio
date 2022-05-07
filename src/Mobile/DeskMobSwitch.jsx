import React from 'react';
import DeskTop from './DeskTop.jsx';
import Mobile from './Mobile.jsx';

function DeskMobSwitch ({offSetY, handleClick, icons, sent, setSent, width}) {
    if (width < 700) {
        return <Mobile handleClick={handleClick} icons={icons} sent={sent} setSent={setSent}></Mobile>
    } else {
        return <DeskTop offSetY={offSetY} handleClick={handleClick} icons={icons} sent={sent} setSent={setSent}></DeskTop>
    }
}

export default DeskMobSwitch