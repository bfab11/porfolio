import React from 'react';
import "./menu.scss";
import Resume from "../../assets/Fabie-Brandon-Resume.pdf";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#skills">Skills</a>
                </li>
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href="#projects">Projects</a>
                </li> */}
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#works">My Work</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href={Resume} target="_blank">Resume</a>
                </li>
            </ul>
        </div>
    )
}
