import React from "react";
import Image from 'next/image'

function Footer() {
    return (
        <footer className="bg-blue-500 p-10 h-screen flex flex-col justify-evenly xl:p-40">
            <div className="flex flex-col md:flex-row md:gap-14 xl:gap-32">
                <div className="flex flex-col justify-evenly md:max-w-[55%] lg:px-5 xl:max-w-[50%] xl:gap-20">
                    <h1 className="tracking-wide font-semibold text-base md:text-2xl lg:text-4xl xl:text-5xl">{'If you want to collaborate on crafting an amazing experience for people – you are very welcome to contact me.'}</h1>
                    <p className="tracking-wide md:text-xl lg:text-2xl xl:text-4xl">{'I am available for freelance projects and full-time employment.'}</p>
                </div>
                <form action="https://formsubmit.co/roman@davidmiguel.io" method="POST" className="my-0 flex-grow" id='contact'>
                    <h1 className=" text-2xl text-center font-semibold">Contact Me</h1>
                    <div className="flex flex-col">
                        <div className=" flex flex-col mt-3">
                            <label htmlFor='name'>Name <span className="text-red-600">*</span></label>
                            <input type='text' name='name' id='name' className="rounded-md" required/>
                        </div>
                        <div className=" flex flex-col mt-3">
                            <label htmlFor='email'>Email <span className="text-red-600">*</span></label>
                            <input type='email' name='email' id='email' className="rounded-md"  required/>
                        </div>
                    </div>
                    <div className=" flex flex-col my-3">
                        <label htmlFor='subject'>Subject <span className="text-red-600">*</span></label>
                        <input type='text' name='subject' id='subject' className="rounded-md"  required/>
                    </div>
                    <div className=" flex flex-col my-3">
                        <label htmlFor='message'>Message <span className="text-red-600">*</span></label>
                        <textarea name="message" cols="40" rows="5" id='message' className="rounded-md" ></textarea>
                    </div>
                    <input type='hidden' name='_captcha' value='false'/>
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_next" value='http://localhost:3000/thankyou'/>
                    <button type='submit' className="w-full rounded-md bg-orange-600 p-2">
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex justify-between xl:mt-32">
                <h1 className='text-lg sm:text-2xl lg:text-3xl lg:px-5'><span className='font-bold'>David</span><span className='text-neutral-300'>Roman</span></h1>
                <div className="flex gap-2">
                    <a href='https://github.com/dmroman395' target='_blank'><Image src='/images/github.png' width={24} height={24} layout='fixed'/></a>
                    <a href='https://www.linkedin.com' target='_blank'><Image src='/images/linkedin.png' width={24} height={24} layout='fixed'/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer