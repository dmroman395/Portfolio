import React from "react";
import ProjectCard from "./projectCard";
import ProjectInfo from "./projectInfo";
import data from '../data.json'

const {notflix, covid} = data

function ProjectsContainer() {
    return (
        <div className="darkerBg border-y border-neutral-800 overflow-auto" id='projects'>
            <div className="flex flex-col md:flex-row md:justify-end">
                <ProjectCard title={notflix.title} img={notflix.img} link={notflix.link} code={notflix.code} tech={notflix.tech} id={'project1'}/>
                <ProjectInfo overview={notflix.info.overview} inspiration={notflix.info.inspiration} challenges={notflix.info.challenges} solutions={notflix.info.solutions} lessons={notflix.info.lessons}/>
            </div>
            <div className="flex flex-col md:flex-row-reverse md:justify-end">
                <ProjectCard title={covid.title} img={covid.img} link={covid.link} code={covid.code} tech={covid.tech} id={'project2'}/>
                <ProjectInfo overview={covid.info.overview} inspiration={covid.info.inspiration} challenges={covid.info.challenges} solutions={covid.info.solutions} lessons={covid.info.lessons}/>
            </div>
        </div>
    )
}

export default ProjectsContainer