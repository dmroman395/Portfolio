import React from "react";

function ProjectInfo({overview, inspiration, challenges, solutions, lessons}) {
    const chalList = challenges.map((challenge) => {
        return <li>{challenge}</li>
    })

    const solList = solutions.map((solution) => {
        return <li>{solution}</li>
    })
    return (
        <div>
            <h1>Overview</h1>
                <p>{overview}</p>
            <h1>Inspiration</h1>
                <p>{inspiration}</p>
            <h1>Challenges</h1>
                <ol>{chalList}</ol>
            <h1>Solutions</h1>
                <ol>{solList}</ol>
            <h1>What I learned</h1>
                <p>{lessons}</p>
        </div>
    )
}

export default ProjectInfo