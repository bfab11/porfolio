import React from 'react'
import "./projectsList.scss";

export default function ProjectsList({ id, title, active, setSelected }) {
    return (
        <li className={active ? "projectslist active" : "projectslist"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
