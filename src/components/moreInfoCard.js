import React from "react";
import data from '../data.json'

function MoreInfoCard({category, desc, icon, type, checked, handleInfo, currentVal}) {
    let svg

    switch(icon) {
        case 'about':
            svg = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:inline" fill="none" viewBox="0 0 24 24" stroke="rgba(94,229,162,255)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
            break;
        case 'skills':
            svg = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  sm:inline" fill="none" viewBox="0 0 24 24" stroke="rgba(94,229,162,255)" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
            break;
        case 'current':
            svg = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:inline" fill="none" viewBox="0 0 24 24" stroke="rgba(94,229,162,255)" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                  </svg>
            break;
        default:
            break;
    }

    function handleClick() {
        if( currentVal == icon) return

        handleInfo({})

        const cardInfo = {
            type: data[type].type,
            header: data[type].header,
            subtext: data[type].subtext,
            info: data[type].info
        }

        setTimeout(() => {
            handleInfo(cardInfo)
        }, 200)
    }
    
    return (
        <div className={`${checked ? 'drop-shadow-2xl -translate-y-1 ' : ''}` + "transition-all ease-in-out duration-300 bg-neutral-700 p-5 rounded-lg justify-between hover:cursor-pointer sm:min-w-full sm:p-5"} onClick={handleClick}>
            <div className="flex flex-row justify-between align-middle sm:justify-between">
                <h1 className={`${checked ? 'text-green-300 ' : 'text-slate-100 '}` + "text-base sm:text-base sm:mb-2"}>{category}</h1>
                {svg}
            </div>
            <p className="text-neutral-400 text-xs">{desc}</p>
        </div>
    )
}

export default MoreInfoCard