import React from 'react'
import "./topbar.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">bfab.</a>
                    <div className="item-container">
                        <PhoneIphoneIcon className="icon" />
                        <span className="phone">650-208-3399</span>
                    </div>
                    <div className="item-container">
                        <EmailIcon className="icon" />
                        <span className="email">brandon.fabie94@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="links">
                        <div className="link-item">
                            <a href="https://twitter.com/brandon_fabie" target="_blank" rel="noopener noreferrer">
                                <TwitterIcon className="link-icon" />
                            </a>
                        </div>
                        <div className="link-item">
                            <a href="https://github.com/bfab11" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon className="link-icon" />
                            </a>
                        </div>
                        <div className="link-item">
                            <a href="https://www.linkedin.com/in/brandon-fabie-7a8101209/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="link-icon" />
                            </a>
                        </div>
                    </div>
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
