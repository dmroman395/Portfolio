import React from 'react'
import Head from 'next/head'

export default function ThankYou() {
    return (
        <>
        <Head>
            <title>David M. Roman | Thank You!</title>
            <meta name='description' content="Thanks for reaching out! I'll get back to you as soon as I can."/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&family=Roboto+Mono:wght@300;400&display=swap" rel="stylesheet"/>
        </Head>        
            <div className='darkBg flex flex-col text-center h-screen align-middle justify-center'>
                <h1 className='text-slate-100 font-semibold text-3xl my-5'>Thanks for reaching out!</h1>
                <p className='text-zinc-400 my-2 text-lg'>I will get back to you as soon as I can.</p>
                <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className=" max-h-48 h-fit w-1/2" fill="none" viewBox="0 0 24 24" stroke="rgba(94,229,162,255)" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>  
                </div>
            </div>
        </>
        
    )
}