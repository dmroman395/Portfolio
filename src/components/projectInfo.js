import React, { useRef, useEffect } from "react";

function ProjectInfo({overview, inspiration, challenges, solutions, lessons, side}) {
    const info = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {

                if (side === 'left') {
                    entry.target.classList.toggle('showProjectInfoLeft')
                    entry.target.classList.toggle('hideProjectInfoLeft')
                } else {
                    entry.target.classList.toggle('showProjectInfoRight')
                    entry.target.classList.toggle('hideProjectInfoRight')
                }
                 observer.unobserve(info.current)
            }
        },
        {
            threshold: 0.4
        })
        observer.observe(info.current)
    },[])

    const chalList = challenges.map((challenge, i) => {
        return <li key={i} className="tracking-wider md:leading-7">{challenge}</li>
    })

    const solList = solutions.map((solution, i) => {
        return <li key={i} className="tracking-wioder md:leading-7">{solution}</li>
    })
    return (
        <div ref={info} className={`${side === 'left' ? 'hideProjectInfoLeft' : 'hideProjectInfoRight'} p-10 mb-12 mt-5 md:w-[50%] md:p-16`}>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">Overview</h1>
                <p className="text-zinc-400 text-base tracking-wider leading-6 md:leading-7 md:my-10 lg:text-lg xl:text-2xl xl:mb-12">{overview}</p>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">Inspiration</h1>
                <p className="text-zinc-400 text-base tracking-wider leading-6 md:leading-7 md:my-10 xl:text-2xl xl:mb-12">{inspiration}</p>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">Challenges</h1>
                <ol className="text-zinc-400 pl-4 xl:pl-9 list-decimal ml-4 md:my-10 xl:mb-12 xl:text-2xl">{chalList}</ol>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">Solutions</h1>
                <ol className="text-zinc-400 pl-4 xl:pl-9 list-decimal ml-4 md:my-10 xl:text-2xl xl:mb-12">{solList}</ol>
            <h1 className="text-slate-100 my-5 text-xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">What I learned</h1>
                <p className="text-zinc-400 text-base tracking-wider leading-6 md:leading-7 xl:text-2xl md:my-10">{lessons}</p>
        </div>
    )
}

export default ProjectInfo