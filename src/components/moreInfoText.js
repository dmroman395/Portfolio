import React, { useEffect } from "react";

function MoreInfoText({type, header, subtext, info}) {

    let modInfo
  
    function styleAsterisks() {
        if (info === undefined) {
            setTimeout(styleAsterisks,100) 
            return;
        }
        
        modInfo = info.replaceAll('*','<span class="greenText">*</span>')
        console.log(modInfo)

    }
 
   styleAsterisks()

    return (
        <>
            <p className="text-zinc-400 text-base sm:text-lg lg:text-lg xl:text-xl">{type}</p>
            <h1 className="tracking-wide text-slate-100 text-3xl my-1 sm:text-4xl lg:text-4xl xl:text-5xl">{header}</h1>
            <h4 className='tracking-wide text-neutral-300 text-xl my-1 italic sm:text-2xl lg:text-3xl xl:text-4xl'>{subtext}</h4>
            <p className="tracking-wide text-zinc-400 text-sm leading-6 sm:text-base lg:text-xl xl:text-2xl" id='infoList' dangerouslySetInnerHTML={{__html: modInfo}}></p>
            {type === 'Skills' ? <p className="text-xs italic text-zinc-400 tracking-wide lg:text-sm"><span className="greenText">*</span>Coming soon...</p> : null}
        </>
    )
}

export default MoreInfoText