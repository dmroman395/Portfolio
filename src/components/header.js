import React, { useRef, useEffect } from "react";
import Link from "next/link";

function Header() {
    const header = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const entry = entries[0]

            console.log()

            if (entry.isIntersecting) {
                entry.target.classList.toggle('show')
                entry.target.classList.toggle('hide')
                observer.unobserve(header.current)
            }
        })

        observer.observe(header.current)
    },[])

    return(
        <header ref={header} className='hide transition-all ease-in-out duration-1000 py-10 px-7 z-20 text-slate-100 flex justify-between sm:p-12 md:px-20 lg:pt-16 lg:px-40 absolute top-0 w-screen'>
            <h1 className='text-lg sm:text-2xl lg:text-3xl'><span className='font-semibold'>David</span><span className='text-neutral-300'>Roman</span></h1>
            <nav className='flex text-xs font-normal sm:text-sm sm:gap-x-6 lg:gap-10 xl:gap-16 lg:text-base'>
                <li className='listItem my-2 mx-1 text-shadow transition-colors duration-300 ease-in-out'><Link href={'#moreInfo'}><a>More Info</a></Link></li>
                <li className='listItem my-2 mx-1 text-shadow transition-colors duration-300 ease-in-out'><Link href={'#projects'}><a>Projects</a></Link></li>
                <li className='listItem my-2 mx-1 text-shadow transition-colors duration-300 ease-in-out'><Link href={'#contact'}><a>Contact</a></Link></li>
            </nav>
        </header>
    )
}

export default Header