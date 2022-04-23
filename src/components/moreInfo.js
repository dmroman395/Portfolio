import React, { useRef, useState, useEffect } from "react";
import MoreInfoText from "./moreInfoText";
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
                <MoreInfoText type={info.type} header={info.header} subtext={info.subtext} info={info.info}/>
            </div>
        </div>
    )
}

export default MoreInfo