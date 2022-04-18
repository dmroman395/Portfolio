import React from "react";

function BackDrop() {
    return (
        <div className="absolute flex items-center justify-center top-0 w-screen h-screen overflow-hidden left-0" >
            <div className="relative h-1/3 w-1/3 flex flex-row justify-center items-center">
                <div className="absolute rounded-full darkerGreen h-44 w-44 blur-xl mix-blend-lighten opacity-50 top-5 -left-20 animate-backdrop"></div>
                <div className="absolute rounded-full lightBlue h-44 w-44 blur-xl mix-blend-lighten opacity-50 -top-8 left-2 animate-backdrop animation-delay-2000"></div>
                <div className="absolute rounded-full lightGreen h-44 w-44 blur-xl mix-blend-lighten opacity-50 left-16 animate-backdrop animation-delay-4000"></div>
            </div>
        </div>
    )
}

export default BackDrop