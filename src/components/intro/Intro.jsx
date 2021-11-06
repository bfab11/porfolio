import React from 'react'
import "./intro.scss";

import Me from "../../img/me.png";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Brandon Fabie</h1>
                    <div className="i-title">
                        <div className="static-text"><span>I'm a</span></div>
                        <ul className="i-title-wrapper">
                            <li className="i-title-item"><span>Developer</span></li>
                            <li className="i-title-item"><span>Designer</span></li>
                            <li className="i-title-item"><span>Content Creator</span></li>
                            <li className="i-title-item"><span>Artist</span></li>
                        </ul>
                    </div>
                    <div className="i-desc-wrapper">
                        <p className="i-desc">Full-stack web developer with a background of content creation and performing arts that specializes in creating beautiful and stunning applications.</p>
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}
