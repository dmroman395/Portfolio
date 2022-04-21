import React from "react";
import Header from "./header";

function Hero() {

    return (
        <div className="h-screen flex flex-col justify-center relative">
            <video autoPlay muted loop className="background">
                <source src="../videos/background.mp4" type="video/mp4"/>
            </video>
            <Header/>
            <div className="backdrop-blur- h-screen w-screen flex flex-col gap-5 justify-center px-10 py-24 md:px-20 lg:px-40 xl:px-72 z-10">
                <span className="text-sm max-w-fit font-medium greenBg rounded py-1 px-3 sm:text-base md:font-normal">Front-End Developer</span>
                <h1 className="text-xl tracking-wide leading-loose text-slate-100 max-w-xl my-6 sm:text-2xl md:text-3xl lg:text-4xl lg:my-10 xl:text-6xl">I recognize that life is a dream, and I dream lucid.</h1>
                <p className="text-sm text-zinc-400 sm:text-base md:text-lg">I build dope shit.</p>
            </div>
        </div>
    )
}

export default Hero