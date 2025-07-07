import React from 'react';
import logo from './assets/Logo.svg'

function Header(){
    return (
        <div >
            <img src={logo} alt='logo' className="logo"/>
        </div>
    );
}

export default Header;
