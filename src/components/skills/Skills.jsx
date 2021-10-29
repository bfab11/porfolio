import React from 'react'
import "./skills.scss";

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <header className="title">Skills</header>
            <div className="skill">
                <div className="set">
                    <span class="fas fa-globe"></span>
                    <header>Web Development</header>
                    <div className="list">
                        <label>HTML</label>
                        <i class="fab fa-html5"></i>
                    </div>
                    <div className="list">
                        <label>CSS</label>
                        <i class="fab fa-css3"></i>
                    </div>
                    <div className="list">
                        <label>JavaScript</label>
                        <i class="fab fa-js-square"></i>
                    </div>
                </div>
                <div className="set">
                    <span class="fas fa-tools"></span>
                    <header>Library/Framework</header>
                    <div className="list">
                        <label>React</label>
                        <i class="fab fa-react"></i>
                    </div>
                    <div className="list">
                        <label>Bootstrap</label>
                        <i class="fab fa-bootstrap"></i>
                    </div>
                    <div className="list">
                        <label>Angular</label>
                        <i class="fab fa-angular"></i>
                    </div>
                    <div className="list">
                        <label>Node.js</label>
                        <i class="fab fa-node-js"></i>
                    </div>
                </div>
                <div className="set">
                    <span class="fas fa-mobile-alt"></span>
                    <header>Mobile Application</header>
                    <div className="list">
                        <label>iOS</label>
                        <i class="fab fa-apple"></i>
                    </div>
                    <div className="list">
                        <label>Android</label>
                        <i class="fab fa-android"></i>
                    </div>
                    <div className="list">
                        <label>React-Native</label>
                        <i class="fab fa-react"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
