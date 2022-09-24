import './Projects.scss'

import { projects } from '../../data/projects'

const Projects = () => {
    return (
        <div className="project-container">
            <h1><span>/</span> projects</h1>
            <div className="cards">
            {projects.map((project, index) => {
                return (
                <div class="card">
                    <div class="face1">
                        <div class="content">
                            {project.svg}
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                    <div class="face2">
                        <div class="content">
                            <p>{project.text}</p>
                            <a href={project.link}>{project.linkText}</a>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}

export default Projects
