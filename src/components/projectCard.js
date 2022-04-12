import React from "react";
import Image from 'next/image'

function ProjectCard({title, img, link, code, tech}) {

    const techList = tech.map((skill, i) => {
        if (i == tech.length - 1) {
            return <li>{skill}</li>
        } else {
            return <li>{skill} |</li>
        }
    })
    return (
        <div className="px-8 py-16 h-screen flex bg-lime-50">
            <div className="w-full h-fit self-center">
                <h1 className="text-3xl text-center">{title}</h1>
                <div className="my-3">
                    <Image
                        src={img}
                        width={556}
                        height={407}
                        layout='responsive'
                    />
                </div>
                <ul className="flex justify-evenly my-3">
                    {techList}
                </ul>
                <div className="flex justify-around">
                    <a href={link} target='_blank'>View Live</a>
                    <a href={code} target='_blank'>View Source Code</a>
                </div> 
            </div>  
        </div>
    )
}

export default ProjectCard