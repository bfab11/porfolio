import React from 'react';
import "./works.scss";
import { featuredProjects } from '../../data';
import { useState } from 'react';

import Arrow from "../../img/arrow.png";

export default function Works() {

    const [ currentSlide, setCurrentSlide ] = useState(0);

    const data = featuredProjects;
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 5) :
        setCurrentSlide(currentSlide<data.length -1 ? currentSlide+1 : 0)
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <a href={d.demo} target="_blank">Active Demo</a>
                                    <a href={d.caseStudy} target="_blank">Case Study</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img src={Arrow} className="arrow left" alt="" onClick={() => handleClick("left")} />
            <img src={Arrow} className="arrow right" alt="" onClick={() => handleClick("right")} />
        </div>
    )
}
