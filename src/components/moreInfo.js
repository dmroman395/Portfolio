import React, { useState, useEffect } from "react";
import MoreInfoCard from "./moreInfoCard";
import MoreInfoText from "./moreInfoText";
import { Transition } from '@headlessui/react'
import data from '../data.json'
import MoreInfoRadioGroup from "./moreInfoRadioGroup";

function MoreInfo() {
    const [info, setInfo] = useState({})

    useEffect(() => {
        setInfo(data.about)
    },[])

    return(
        <div className="darkerBg h-screen flex flex-col justify-center gap-10 p-12 sm:flex-row sm:justify-evenly sm:p-16 sm:gap-10" id='moreInfo'>
            {/* <div className="flex flex-col justify-between gap-y-1 sm:flex-col sm:justify-evenly sm:gap-1 sm:w-[45%] sm:max-w-lg">
                <MoreInfoCard category={'About Me'} desc={"Just a lil bit o'info about ya boiiii"} icon={'info'} type={'about'} setInfo={setInfo}/>
                <MoreInfoCard category={'Skills'} desc={"Technologies and tools I've worked with"} icon={'skills'} type={'skills'} setInfo={setInfo}/>
                <MoreInfoCard category={'Current Focus'} desc={"What I am currently working on"} icon={'current'} type={'focus'} setInfo={setInfo}/>
            </div> */}
            <MoreInfoRadioGroup handleInfo={setInfo}/>
            <Transition
                className="mt-5 flex flex-col gap-y-2 h-[35%] sm:max-w-[50%]"
                appear={false}
                show={Object.keys(info).length > 0}
                unmount={true}
                enter="transition-opacity ease-in duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <MoreInfoText type={info.type} header={info.header} subtext={info.subtext} info={info.info}/>
            </Transition>
        </div>
    )
}

export default MoreInfo