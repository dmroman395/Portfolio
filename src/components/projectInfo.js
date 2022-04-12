import React from "react";

function ProjectInfo({overview, inspiration, challenges, solutions, lessons}) {
    const chalList = challenges.map((challenge) => {
        return <li>{challenge}</li>
    })

    const solList = solutions.map((solution) => {
        return <li>{solution}</li>
    })
    return (
        <div className="m-10">
            <h1 className="my-5 text-xl font-semibold">Overview</h1>
                <p className="text-sm tracking-wide leading-6">{overview}</p>
            <h1 className="my-5 text-xl font-semibold">Inspiration</h1>
                <p className="text-sm tracking-wider leading-6">{inspiration}</p>
            <h1 className="my-5 text-xl font-semibold">Challenges</h1>
                <ol className="list-decimal ml-4">{chalList}</ol>
            <h1 className="my-5 text-xl font-semibold">Solutions</h1>
                <ol className="list-decimal ml-4">{solList}</ol>
            <h1 className="my-5 text-xl font-semibold">What I learned</h1>
                <p className="text-sm tracking-wide leading-6">{lessons}</p>
        </div>
    )
}

export default ProjectInfo