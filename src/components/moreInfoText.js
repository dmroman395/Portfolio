import React, { useEffect, useRef } from "react";

function MoreInfoText({type, header, subtext, info}) {
    const text = useRef()

    let modInfo

    function styleAsterisks() {
        if (info === undefined) {
            setTimeout(styleAsterisks,100) 
            return;
        }
        modInfo = info.replaceAll('*','<span class="greenText">*</span>')
    }
 
   styleAsterisks()

    useEffect(() => {
        text.current.classList.add('hideProjectText')
        text.current.classList.remove('showProjectText')

        setTimeout(() => {
            text.current.classList.add('showProjectText')
            text.current.classList.remove('hideProjectText')
        },300)
    },[type])


    return (
        <div ref={text} className={`flex flex-col justify-center gap-y-2 md:gap-y-4 min-h-[50%] h-full transition-all ease-in min-w-[40%] sm:max-w-[45%] sm:justify-evenly md:max-w-[40%]`}>
            <p className="text-zinc-400 text-sm sm:text-lg lg:text-lg xl:text-xl">{type}</p>
            <h1 className="tracking-wide text-slate-100 text-2xl my-1 sm:text-4xl lg:text-4xl xl:text-5xl">{header}</h1>
            <h4 className='tracking-wide text-neutral-300 text-lg my-1 italic sm:text-2xl lg:text-3xl'>{subtext}</h4>
            <p className="tracking-wide whitespace-pre-line text-zinc-400 text-xs leading-6 sm:text-base lg:text-xl" id='infoList' dangerouslySetInnerHTML={{__html: modInfo}}></p>
            {type === 'Skills' ? <a className="tracking-wide whitespace-pre-line greenText underline hover:cursor-pointer text-xs leading-6 sm:text-base lg:text-xl" href='./David M Roman Resume.pdf' target='_blank'>View Resume</a> : null}
            {type === 'Skills' ? <p className="text-xs italic text-zinc-400 tracking-wide lg:text-sm"><span className="greenText">*</span>Coming soon...</p> : null}
        </div>
    )
}

export default MoreInfoText