import React, { useState, useEffect } from 'react';
import Image from 'next/image'

function ProjectCard({title, img, link, code, tech, id}) {
    const [scrollPos, setScrollPos] = useState(0)
    const [project1Pos, setProject1Pos] = useState({})
    const [project2Pos, setProject2Pos] = useState({})
    const [footerOff, setFooterOff] = useState (0)

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

        const footer = document.querySelector('footer')
        setFooterOff(footer.offsetTop)

    },[])

    useEffect(() => {
        
        if (Object.keys(project1Pos).length == 0 || Object.keys(project2Pos).length == 0) return

        if(window.innerWidth < 768) return

        if (scrollPos < project1Pos.offsetTop) {
            project1Pos.project1Elm.style.position = 'relative'
            project1Pos.project1Elm.style.alignSelf = 'flex-start'
            return
        }

        if (scrollPos >= project1Pos.offsetTop && (scrollPos <= project2Pos.offsetTop - project1Pos.project1Elm.scrollHeight)) {
            project1Pos.project1Elm.style.position = 'fixed'
            project1Pos.project1Elm.style.top = '0'
            project1Pos.project1Elm.style.left ='0'
            return
        }

        if (scrollPos >= project2Pos.offsetTop - project1Pos.project1Elm.scrollHeight) {
            project1Pos.project1Elm.style.position = 'relative'
            project1Pos.project1Elm.style.alignSelf = 'flex-end'
            // return
        }






        if (scrollPos < project2Pos.offsetTop) {
            project2Pos.project2Elm.style.position = 'relative'
            project2Pos.project2Elm.style.alignSelf = 'flex-start'
            return
        }

        if (scrollPos >= project2Pos.offsetTop && (scrollPos <= (project2Pos.offsetTop + project2Pos.parentHeight) - project2Pos.project2Elm.scrollHeight)) {
            project2Pos.project2Elm.style.position = 'fixed'
            project2Pos.project2Elm.style.top = '0'
            project2Pos.project2Elm.style.right ='0'
            return
        }

        if (scrollPos >= project2Pos.offsetTop - project2Pos.project2Elm.scrollHeight) {
            project2Pos.project2Elm.style.position = 'relative'
            project2Pos.project2Elm.style.alignSelf = 'flex-end'
            return
        }

        // if (scrollPos >= project2Pos.offsetTop && scrollPos < (project2Pos.offsetTop + project2Pos.offsetHeight)) {
        //     project2Pos.project2Elm.style.position = 'fixed'
        //     project2Pos.project2Elm.style.top = '0'
        //     project2Pos.project2Elm.style.left ='0'

        // } else {
        //     project2Pos.project2Elm.style.position = 'static'
        // }

    }, [scrollPos])

    const techList = tech.map((skill, i) => {
        if (i == tech.length - 1) {
            return <li key={i}>{skill}</li>
        } else {
            return <><li key={i}>{skill}</li><span className='text-zinc-400'> |</span></>
        }
    })
    return (
        <div className="px-8 py-16 h-screen flex flex-grow darkBg md:w-[50%]" id={id}>
            <div className="w-full h-fit self-center">
                <h1 className="text-3xl text-center text-slate-100">{title}</h1>
                <div className="my-3">
                    <Image
                        src={img}
                        width={556}
                        height={407}
                        layout='responsive'
                    />
                </div>
                <ul className="grid grid-cols-9 justify-items-center my-3 text-slate-100">
                    {techList}
                </ul>
                <div className="flex justify-around">
                    <a href={link} target='_blank' className='underline text-green-300 hover:cursor-pointer'>View Live</a>
                    <a href={code} target='_blank' className='underline text-green-300 hover:cursor-pointer'>View Source Code</a>
                </div> 
            </div>  
        </div>
    )
}

export default ProjectCard