import React from 'react'
import ProjectsList from '../projectsList/ProjectsList';
import "./projects.scss";
import { useEffect, useState } from "react";
import { 
    webProjects,
    mobileProjects,
    backendProjects,
    featuredProjects
 } from '../../data';

export default function Projects() {

    const [ selected, setSelected ] = useState("featured");
    const [ data, setData ] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        },
        {
            id: "backend",
            title: "Back-End"
        }
    ];

    useEffect(() => {

        switch (selected) {
            case "featured":
                setData(featuredProjects);
                break;
            case "web":
                setData(webProjects);
                break;
            case "mobile":
                setData(mobileProjects);
                break;
            case "backend":
                setData(backendProjects);
                break;
            default:
                setData(featuredProjects)
        }

    }, [ selected ])

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <ProjectsList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map ((d) => (
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
