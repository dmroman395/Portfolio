import React, { useRef, useState, useEffect } from "react";
import MoreInfoText from "./moreInfoText";
import { Transition } from '@headlessui/react'
import data from '../data.json'
import MoreInfoRadioGroup from "./moreInfoRadioGroup";

function MoreInfo() {
    const [info, setInfo] = useState({})

    const moreInfo = useRef()

    useEffect(() => {
        setInfo(data.about)
        
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            if (entry.isIntersecting) {
                entry.target.classList.toggle('show')
                entry.target.classList.toggle('moreInfo')
                
                observer.unobserve(moreInfo.current)
            }
        },
        {
            threshold: .75
        }
        )

        observer.observe(moreInfo.current)
    },[])

    return(
        <div className="darkerBg flex items-center h-screen p-12 sm:px-16 sm:py-52" id='moreInfo'>
            <div ref={moreInfo} className="moreInfo transition-all ease-in duration-300 h-full w-full flex flex-col justify-center gap-10 sm:flex-row sm:items-center sm:justify-evenly sm:gap-10">
                <MoreInfoRadioGroup handleInfo={setInfo}/>
                <Transition
                    className="flex flex-col justify-center gap-y-4 h-full min-w-[40%] sm:max-w-[45%] sm:justify-evenly md:max-w-[40%]"
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
        </div>
    )
}

export default MoreInfo