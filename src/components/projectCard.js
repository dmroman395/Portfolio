import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function ProjectCard({title, img, link, code, tech, id}) {
    const [scrollPos, setScrollPos] = useState(0)
    const [project1Pos, setProject1Pos] = useState({})
    const [project2Pos, setProject2Pos] = useState({})

    useEffect(() => {
        window.addEventListener('scroll', () => {
        setScrollPos(window.scrollY)
        })
        const project1 = document.getElementById('project1')
        const project1PosData = {
            project1Elm: project1,
            offsetTop: project1.offsetTop,
            parentHeight: project1.parentNode.offsetHeight,
        }
        setProject1Pos(project1PosData)

        const project2 = document.getElementById('project2')
        const project2PosData = {
            project2Elm: project2,
            offsetTop: project2.offsetTop,
            parentHeight: project2.parentNode.offsetHeight
        }
        setProject2Pos(project2PosData)

    },[])

    useEffect(() => {
        
        if (Object.keys(project1Pos).length == 0 || Object.keys(project2Pos).length == 0) return

        if (scrollPos >= project1Pos.offsetTop && scrollPos < project2Pos.offsetTop) {
            project1Pos.project1Elm.style.position = 'fixed'
            project1Pos.project1Elm.style.top = '0'
            project1Pos.project1Elm.style.left ='0'
        } else {
            project1Pos.project1Elm.style.position = 'relative'
        }

        if (scrollPos >= project2Pos.offsetTop && scrollPos < (project2Pos.offsetTop + project2Pos.offsetHeight)) {
            project2Pos.project2Elm.style.position = 'fixed'
            project2Pos.project2Elm.style.top = '0'
            project2Pos.project2Elm.style.left ='0'

        } else {
            project2Pos.project2Elm.style.position = 'static'
        }

    }, [scrollPos])

    const techList = tech.map((skill, i) => {
        if (i == tech.length - 1) {
            return <li>{skill}</li>
        } else {
            return <li>{skill} |</li>
        }
    })
    return (
        <div className="px-8 py-16 h-screen flex bg-lime-50 md:w-[55%]" id={id}>
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