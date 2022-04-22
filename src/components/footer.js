import React from "react";
import Image from 'next/image'

function Footer() {
    return (
        <footer className="darkBg p-10 h-screen flex flex-col justify-evenly xl:p-40">
            <div className="flex flex-col md:flex-row md:gap-14 xl:gap-32">
                <div className="flex flex-col space-y-5 justify-evenly md:max-w-[55%] lg:px-5 xl:max-w-[50%] xl:gap-20">
                    <h1 className="text-slate-100 tracking-wide font-semibold text-base md:text-2xl lg:text-4xl xl:text-5xl">If you want to collaborate on crafting an amazing experience, you are very welcome to contact me.</h1>
                    <p className="text-zinc-400 tracking-wide md:text-xl lg:text-2xl xl:text-4xl">I am <span className="greenText underline">available</span> for freelance projects and full-time employment.</p>
                </div>
                <form action="https://formsubmit.co/roman@davidmiguel.io" method="POST" className="my-0 flex-grow mt-12 sm:mt-0" id='contact'>
                    <h1 className="text-neutral-300 text-2xl text-center font-semibold">Contact Me</h1>
                    <div className="flex flex-col">
                        <div className=" flex flex-col mt-3">
                            <label htmlFor='name' className="text-neutral-300">Name <span className="text-red-600">*</span></label>
                            <input type='text' name='name' id='name' className="rounded-md" required/>
                        </div>
                        <div className=" flex flex-col mt-3">
                            <label htmlFor='email' className="text-neutral-300">Email <span className="text-red-600">*</span></label>
                            <input type='email' name='email' id='email' className="rounded-md"  required/>
                        </div>
                    </div>
                    <div className=" flex flex-col my-3">
                        <label htmlFor='subject' className="text-neutral-300">Subject <span className="text-red-600">*</span></label>
                        <input type='text' name='subject' id='subject' className="rounded-md"  required/>
                    </div>
                    <div className=" flex flex-col my-3">
                        <label htmlFor='message' className="text-neutral-300">Message <span className="text-red-600">*</span></label>
                        <textarea name="message" cols="40" rows="5" id='message' className="rounded-md resize-none" ></textarea>
                    </div>
                    <input type='hidden' name='_captcha' value='false'/>
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_next" value='http://localhost:3000/thankyou'/>
                    <button type='submit' className="w-full rounded-md p-2 font-medium greenBg">
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex justify-between xl:mt-32">
                <h1 className='text-lg sm:text-2xl lg:text-3xl lg:px-5'><span className='font-bold text-slate-100'>David</span><span className='text-neutral-300'>Roman</span></h1>
                <div className="flex gap-2">
                    <a href='https://github.com/dmroman395' target='_blank'><Image src='/images/github.png' width={24} height={24} layout='fixed'/></a>
                    <a href='https://www.linkedin.com' target='_blank'><Image src='/images/linkedin.png' width={24} height={24} layout='fixed'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer