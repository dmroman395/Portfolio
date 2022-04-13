import React from "react";
import Image from 'next/image'

function Footer() {
    return (
        <footer className="bg-blue-500 p-10">
            <h1 className="font-semibold text-base">{'If you want to collaborate on crafting amazing experience for people – you are very welcome to contact me.'}</h1>
            <p className="my-5">{'I am available for freelance projects and full-time employment.'}</p>
            
            <form action="https://formsubmit.co/4dbef3ded4ad3fba87469c1411c8dc69" method="POST" className="my-10">
                <h1 className=" text-lg text-center font-semibold">Contact Me</h1>
                <div className="flex flex-col">
                    <div className=" flex flex-col mt-3">
                        <label for='name'>Name <span className="text-red-600">*</span></label>
                        <input type='text' name='name' id='name' className="rounded-md" required/>
                    </div>
                    <div className=" flex flex-col mt-3">
                        <label for='email'>Email <span className="text-red-600">*</span></label>
                        <input type='email' name='email' id='email' className="rounded-md"  required/>
                    </div>
                </div>
                <div className=" flex flex-col my-3">
                    <label for='subject'>Subject <span className="text-red-600">*</span></label>
                    <input type='text' name='subject' id='subject' className="rounded-md"  required/>
                </div>
                <div className=" flex flex-col my-3">
                    <label for='message'>Message <span className="text-red-600">*</span></label>
                    <textarea name="message" cols="40" rows="5" id='message' className="rounded-md" ></textarea>
                </div>
                <input type='hidden' name='_captcha' value='false'/>
                <input type="hidden" name="_template" value="table"/>
                <button type='submit' className="w-full rounded-md bg-orange-600 p-2">
                    Submit
                </button>
            </form>
            <div className="flex justify-between">
                <h1 className='text-lg sm:text-2xl lg:text-3xl'><span className='font-bold'>David</span><span className='text-neutral-300'>Roman</span></h1>
                <div className="flex gap-2">
                    <a href='https://github.com/dmroman395' target='_blank'><Image src='/images/github.png' width={24} height={24} layout='fixed'/></a>
                    <a href='https://www.linkedin.com' target='_blank'><Image src='/images/linkedin.png' width={24} height={24} layout='fixed'/></a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer