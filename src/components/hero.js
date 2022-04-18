import React from "react";
import Header from "./header";
import BackDrop from "./backdrop";


function Hero() {
    return (
        <div className="h-screen flex flex-col justify-center relative">
            <BackDrop/>
            <Header/>
            <div className="mx-10 my-24 md:mx-20 lg:px-40 lg:mx-0 z-10">
                <span className="text-sm font-medium bg-green-300 rounded py-1 px-3">Front-End Developer</span>
                <h1 className="text-xl text-slate-100 my-6">I recognize that life is a dream, and I dream lucid.</h1>
                <p className="text-sm text-zinc-400">I build dope shit.</p>
            </div>
        </div>
    )
}

export default Hero