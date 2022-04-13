import React from "react";
import MoreInfoCard from "./moreInfoCard";

function MoreInfo() {
    return(
        <div className="flex flex-col bg-neutral-800 p-10 sm:flex-row sm:justify-evenly sm:p-16 sm:gap-10" id='moreInfo'>
            <div className="flex flex-row justify-between gap-x-1 sm:flex-col sm:justify-evenly sm:gap-1 sm:w-[45%] sm:max-w-lg">
                <MoreInfoCard category={'About Me'} desc={"Just a lil bit o'info about ya boiiii"} icon={'info'}/>
                <MoreInfoCard category={'Skills'} desc={"Technologies and tolls I've worked with"} icon={'skills'}/>
                <MoreInfoCard category={'Current Focus'} desc={"What I am currently working on"} icon={'current'}/>
            </div>
            <div className="mt-5 flex flex-col gap-y-2 sm:max-w-[50%]">
                <p className="text-zinc-400 text-xs">About Me</p>
                <h1 className="text-slate-100 text-2xl my-1">Hey, I'm David.</h1>
                <h4 className='text-neutral-300 text-lg my-1 italic'>Self-taught. Driven. Ambitious.</h4>
                <p className="text-zinc-400 text-sm leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default MoreInfo