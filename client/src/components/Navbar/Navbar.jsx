import React from 'react';

import accLogo from '../../assets/img/Logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="" alt="" className='navbar__logo'/>

            <span style={{color:"red"}}>Time now: {new Date().toLocaleTimeString()} </span>

            <ul className='navbar__list'>
                <li>Dashboard</li>
                <li>Reservations</li>
                <li>Rooms</li>
                <li>Users</li>
                <li>Services</li>
            </ul>

            <div className='navbar__account'>
                <span>User_name</span>
                <img src={accLogo} id='navbarAvatar'/>
            </div>
        </div>
    )
}

export default Navbar;