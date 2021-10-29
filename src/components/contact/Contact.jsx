import React from 'react';
import "./contact.scss";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import emailjs from 'emailjs-com';

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
                <div className="left">
                    <h1 className="title">Let's talk!</h1>
                    <div className="info">
                        <div className="info-item">
                            <PhoneIphoneIcon className="icon" />
                            <span>650-208-3399</span>
                        </div>
                        <div className="info-item">
                            <EmailIcon className="icon" />
                            <span>brandon.fabie94@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <HomeIcon className="icon" />
                            <span>520 Falcon Way, Hercules, California</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>Get in touch with me!</h1>
                    <p className="desc">Would love to hear about your great ideas. Excited to work with you!</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" ></textarea>
                        <button>Submit</button>
                        {done && <p>Thanks for your message!</p>}
                    </form>
                </div>
            </div>
            <div className="footer">
                <div className="links">
                    <div className="link-item">
                        <a href="https://twitter.com/_bfabi" target="_blank" rel="noopener noreferrer">
                            <img src="assets/twitter.png" alt="" className="link-icon" />
                        </a>
                    </div>
                    <div className="link-item">
                        <a href="https://github.com/bfab11" target="_blank" rel="noopener noreferrer">
                            <img src="assets/github_PNG87.png" alt="" className="link-icon" />
                        </a>
                    </div>
                    <div className="link-item">
                        <a href="https://www.linkedin.com/in/brandon-fabie-7a8101209/" target="_blank" rel="noopener noreferrer">
                            <img src="assets/linkedin.png" alt="" className="link-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
