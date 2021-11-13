import React from 'react'
import "./about.scss";

import MeAgain from "../../img/meagain.jpg"
import AppleMe from "../../img/appleme.png"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="about-card-bg"></div>
                <div className="about-card">
                    <img src={MeAgain} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                {/* <p className="about-sub">My name is Brandon. I am an aspiring web developer. I am excited to continue learning about web development in hopes to achieve greater heights.</p> */}
                <p className="about-desc">Hi, I'm Brandon! A full-stack web developer with experience in HTML, CSS, JavaScript, React, and Angular as well as back-end development with 
                node.js, express, and MongoDB. I have always been a fan of puzzles, problem-solving, and brain games. I like to enjoy my spare time playing Soduku, solving puzzles, video games, and 
                dancing. I've always had a knack of solving problems, which fortunately is what coding consists a lot of! And with that, web development was something that I quickly became fond of. 
                Along with developing, I also really enjoy designing! As a former Hip Hop dancer, I've always had a creative mind and an eye for what's innovative and appealing. As I made the
                transition, I quickly discovered how transferable those skills were to web development.

                {/* Coming from a background in customer service, I have developed a strong sense of intuitiveness and the ability to cater to my clients’ needs. 
                While also being a dance teacher, I understand the importance of being able to connect and appeal to different types of users. As someone who has always enjoyed puzzles and word 
                problems, I have the tools and drive to tackle any issue that stands in my way of coding. With these skills, I am excited to start developing beautiful and dynamic applications 
                for my clients. */}
                </p>
                <div className="about-award"></div>
            </div>
        </div>
    )
}
