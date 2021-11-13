import React from 'react';
import "./contact.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import emailjs from 'emailjs-com';
import Resume from "../../assets/Fabie-Brandon-Resume.pdf";

import { useRef, useState } from 'react';

export default function Contact() {

    const formRef = useRef();
    const [ done, setDone ] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_z5rpngl', 'template_o7k2cf9', formRef.current, 'user_yEfCeGwB6l6RyGdq5b51m')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact" id="contact">
            <div className="bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's talk!</h1>
                    <div className="info">
                        <div className="info-item">
                            <PhoneIphoneIcon id="icon" />
                            <span>650-208-3399</span>
                        </div>
                        <div className="info-item">
                            <EmailIcon id="icon" />
                            <span>brandon.fabie94@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <HomeIcon id="icon" />
                            <span>Hercules, California <br />[Open to remote]</span>
                        </div>
                    </div>
                    <div className="resume-wrapper">
                        <h1 className="resume-title">Resume</h1>
                        <div className="resume-container">
                            <div className="resume-item">
                                <a href={Resume} target="_blank">
                                    <SearchIcon className="icon" />
                                    View
                                </a>
                            </div>
                            <div className="resume-item">
                                <a href={Resume} download>
                                    <DownloadIcon className="icon" />
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <h1>Get in touch with me!</h1>
                    <p className="desc">Would love to hear about your great ideas. Excited to work with you!</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" ></textarea>
                        <div className="form-buttons">
                            <button>Submit</button>
                            {done && <p>Thanks for your message!</p>}
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="links">
                    <div className="link-item">
                        <a href="https://twitter.com/_bfabi" target="_blank" rel="noopener noreferrer">
                            twitter
                            {/* <TwitterIcon className="link-icon" /> */}
                        </a>
                    </div>
                    <div className="link-item">
                        <a href="https://github.com/bfab11" target="_blank" rel="noopener noreferrer">
                            github
                            {/* <GitHubIcon className="link-icon" /> */}
                        </a>
                    </div>
                    <div className="link-item">
                        <a href="https://www.linkedin.com/in/brandon-fabie-7a8101209/" target="_blank" rel="noopener noreferrer">
                            linkedin
                            {/* <LinkedInIcon className="link-icon" /> */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
