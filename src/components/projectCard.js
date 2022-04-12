import React from "react";

function ProjectCard({title, img, link, code, tech}) {

    const techList = tech.map((skill) => {
        return <li>{skill} |</li>
    })
    return (
        <div>
            <h1>{title}</h1>
            <img src={img}></img>
            <ul>
                {techList}
            </ul>
            <div>
                <a href={link} target='_blank'>View Live</a>
                <a href={code} target='_blank'>View Source Code</a>
            </div>   
        </div>
    )
}

export default ProjectCard