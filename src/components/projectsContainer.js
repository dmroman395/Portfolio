import React from "react";
import ProjectCard from "./projectCard";
import ProjectInfo from "./projectInfo";
import data from '../data.json'

const {notflix, covid} = data

function ProjectsContainer() {
    return (
        <div className="bg-neutral-200">
            <ProjectCard title={notflix.title} img={notflix.img} link={notflix.link} code={notflix.code} tech={notflix.tech}/>
            <ProjectInfo overview={notflix.info.overview} inspiration={notflix.info.inspiration} challenges={notflix.info.challenges} solutions={notflix.info.solutions} lessons={notflix.info.lessons}/>
            {/* <ProjectCard title={covid.title} img={covid.img} link={covid.link} code={covid.code} tech={covid.tech}/>
            <ProjectInfo overview={covid.info.overview} inspiration={covid.info.inspiration} challenges={covid.info.challenges} solutions={covid.info.solutions} lessons={covid.info.lessons}/> */}
        </div>
    )
}

export default ProjectsContainer