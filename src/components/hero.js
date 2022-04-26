import React, { useRef, useEffect} from "react";
import Header from "./header";

function Hero() {
    const hero = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {
                entry.target.classList.toggle('show')
                entry.target.classList.toggle('hide')
                observer.unobserve(hero.current)
            }
        })

        observer.observe(hero.current)
    },[])

    return (
        <div className="parallax h-screen flex flex-col justify-center relative">
            <div className="background">
                <video autoPlay muted loop className="vid">
                    <source src="../videos/background.mp4" type="video/mp4"/>
                </video>
                <div className="overlay animate-fadeOut"></div>
            </div>
            <Header/>
            <div ref={hero} className="hide transition-all ease-in-out duration-1000 h-screen w-screen flex flex-col gap-5 justify-center items-end px-10 py-24 md:px-20 lg:px-40 z-10">
                <span className="text-sm max-w-fit font-medium greenBg rounded py-1 px-3 sm:text-base md:font-normal">Front-End Developer</span>
                <h1 className="text-xl text-right tracking-wide leading-loose text-slate-100 max-w-[80%] xl:max-w-[65%] my-6 sm:text-2xl md:text-3xl lg:text-4xl lg:my-10 xl:text-6xl">Passionate problem solver, aspiring to be more than just average.</h1>
                <p className="text-sm italic text-zinc-400 sm:text-base md:text-lg">Scroll down to learn more</p>
            </div>
        </div>
    )
}

export default Hero