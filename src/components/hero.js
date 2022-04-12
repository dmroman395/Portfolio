import React from "react";
import Header from "./header";


function Hero() {
    return (
        <>
            <Header/>
            <div className="mx-10 my-24">
                <span className="text-sm font-medium bg-green-300 rounded py-1 px-3">Front-End Developer</span>
                <h1 className="text-xl text-slate-100 my-6">I recognize that life is a dream, and I dream lucid.</h1>
                <p className="text-sm text-zinc-400">I build dope shit.</p>
            </div>
        </>
    )
}

export default Hero