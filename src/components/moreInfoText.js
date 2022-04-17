import React from "react";

function MoreInfoText(props) {
    const { type, header, subtext, info } = props;

    <div className="mt-5 flex flex-col gap-y-2 h-[90%] sm:max-w-[50%]">
        <p className="text-zinc-400 text-xs">{type}</p>
        <h1 className="text-slate-100 text-2xl my-1">{header}</h1>
        <h4 className='text-neutral-300 text-lg my-1 italic'>{subtext}</h4>
        <p className="text-zinc-400 text-sm leading-6">{info}</p>
    </div>
}

export default MoreInfoText