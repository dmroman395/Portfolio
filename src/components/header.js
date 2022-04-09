import React from 'react';

function Header() {
    return(
        <header className='p-5 text-slate-100 flex justify-between sm:p-10 lg:pt-16 lg:pl-52 lg:pr-52'>
            <h1 className='text-lg sm:text-2xl lg:text-3xl'><span className='font-bold'>David</span><span className='text-neutral-300'>Roman</span></h1>
            <ul className='flex text-xs font-normal sm:text-sm lg:text-base'>
                <li className='m-2'>More Info</li>
                <li className='m-2'>Projects</li>
                <li className='m-2'>Contact Me</li>
            </ul>
        </header>
    )
}

export default Header