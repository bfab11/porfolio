import React from 'react'
import "./topbar.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">bfab.</a>
                    <div className="item-container">
                        <PhoneIphoneIcon className="icon" />
                        <span>650-208-3399</span>
                    </div>
                    <div className="item-container">
                        <EmailIcon className="icon" />
                        <span>brandon.fabie94@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
