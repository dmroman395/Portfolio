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
        if (i === tech.length - 1) {
            return <li className='flex-grow min-w-fit max-w-[20%]' key={i}>{skill}</li>
        } else {
            return <div key={i} className='flex flex-grow min-w-fit max-w-[20%] justify-around'><li>{skill}</li><span className='text-zinc-400'> | </span></div>
        }
    })
    return (
        <div className={`relative md:sticky transition-all ease-in-out px-8 py-16 divide-zinc-50 h-screen flex flex-grow justify-center top-0 md:w-[50%] lg:px-16`} id={id}>
            <div ref={project} className={`${side === 'left' ? 'hideProjectCardLeft' : 'hideProjectCardRight'} flex flex-col gap-y-5 w-full h-fit self-center sm:max-w-[450px] lg:max-w-[550px] xl:max-w-[700px]`}>
                <h1 className="text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl text-slate-100">{title}</h1>
                <div className="my-3">
                    <Image
                        alt='screenshot of project'
                        src={img}
                        width={556}
                        height={407}
                        layout='responsive'
                        className='rounded-lg'
                    />
                </div>
                <ul className="flex flex-wrap justify-center my-3 text-slate-100 self-center lg:text-lg xl:text-2xl max-w-[400px] xl:max-w-[600px]">
                    {techList}
                </ul>
                <div className="flex justify-around">
                    {link ? <a href={link} target='_blank' rel="noreferrer" className='underline greenText hover:cursor-pointer lg:text-lg xl:text-2xl'>View Live</a> : null}
                    <a href={code} target='_blank' rel="noreferrer" className='underline greenText hover:cursor-pointer lg:text-lg xl:text-2xl'>View Source Code</a>
                </div> 
            </div>  
        </div>
    )
}

export default ProjectCard