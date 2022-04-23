import React, { useRef, useEffect } from 'react';
import Image from 'next/image'

function ProjectCard({title, img, link, code, tech, id, side}) {
    const project = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {

                if (side === 'left') {
                    entry.target.classList.toggle('showProjectCardLeft')
                    entry.target.classList.toggle('hideProjectCardLeft')
                } else {
                    entry.target.classList.toggle('showProjectCardRight')
                    entry.target.classList.toggle('hideProjectCardRight')
                }
                 observer.unobserve(project.current)
            }
        },
        {
            threshold: .75
        })
        observer.observe(project.current)
    },[])

    const techList = tech.map((skill, i) => {
        if (i == tech.length - 1) {
            return <li key={i}>{skill}</li>
        } else {
            return <><li key={i}>{skill}</li><span className='text-zinc-400'> |</span></>
        }
    })
    return (
        <div className={`relative md:sticky transition-all ease-in-out px-8 py-16 divide-zinc-50 h-screen flex flex-grow top-0 md:w-[50%]`} id={id}>
            <div ref={project} className={`${side === 'left' ? 'hideProjectCardLeft' : 'hideProjectCardRight'} w-full h-fit self-center`}>
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
                    <a href={link} target='_blank' rel="noreferrer" className='underline greenText hover:cursor-pointer'>View Live</a>
                    <a href={code} target='_blank' rel="noreferrer" className='underline greenText hover:cursor-pointer'>View Source Code</a>
                </div> 
            </div>  
        </div>
    )
}

export default ProjectCard