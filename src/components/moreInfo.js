import React, { useState } from "react";
import MoreInfoCard from "./moreInfoCard";
import data from '../data.json'

function MoreInfo() {
    const [info, setInfo] = useState(data.about)
    return(
        <div className="flex flex-col bg-neutral-800 p-10 sm:flex-row sm:justify-evenly sm:p-16 sm:gap-10" id='moreInfo'>
            <div className="flex flex-row justify-between gap-x-1 sm:flex-col sm:justify-evenly sm:gap-1 sm:w-[45%] sm:max-w-lg">
                <MoreInfoCard category={'About Me'} desc={"Just a lil bit o'info about ya boiiii"} icon={'info'} type={'about'} setInfo={setInfo}/>
                <MoreInfoCard category={'Skills'} desc={"Technologies and tools I've worked with"} icon={'skills'} type={'skills'} setInfo={setInfo}/>
                <MoreInfoCard category={'Current Focus'} desc={"What I am currently working on"} icon={'current'} type={'focus'} setInfo={setInfo}/>
            </div>
            <div className="mt-5 flex flex-col gap-y-2 sm:max-w-[50%]">
                <p className="text-zinc-400 text-xs">{info.type}</p>
                <h1 className="text-slate-100 text-2xl my-1">{info.header}</h1>
                <h4 className='text-neutral-300 text-lg my-1 italic'>{info.subtext}</h4>
                <p className="text-zinc-400 text-sm leading-6">{info.info}</p>
            </div>
        </div>
    )
}

export default MoreInfo