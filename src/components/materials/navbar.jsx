import React, { Component } from 'react';
import Logo from '../../files/Logo.png';
import disableScroll from 'disable-scroll';


function openNav() {
    document.getElementById("myNav").style.width = "100%";
    disableScroll.on();
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    disableScroll.off();
}

class navbar extends React.Component {
    render() { 
        return (
            <nav className="navbar">
                <img className="logo" src={Logo} />
                <div id="myNav" class="overlay">
                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                    <div class="overlay-content">
                        <a href="/" onClick={closeNav}>Home</a>
                        <a href="/service" onClick={closeNav}>Service</a>
                        <a href="/media" onClick={closeNav}>Socials</a>
                    </div>
                </div>
                <div className="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="white" class="bi bi-cart2" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="white" class="bi bi-list" viewBox="0 0 16 16" onClick={openNav}>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
            </nav>
        );
    }
}
 
export default navbar;