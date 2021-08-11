import './Projects.scss'
import { WebScraper } from '../../images/projects/WebScraper'
import { Peerr } from '../../images/projects/Peerr'
import { Computer } from '../../images/projects/Computer'
import { Inventory } from '../../images/projects/Inventory'
import { Plant } from "../../images/projects/Plant"
import { Tetris } from '../../images/projects/Tetris'

const getProjectSvg = (index) => {
    switch (index) {
        case 0:
            return <Peerr />
        case 1:
            return <Tetris />
        case 2:
            return <WebScraper />
        case 3:
            return <Computer />
        case 4:
            return <Inventory />
        case 5:
            return <Plant />
    }
}

const projects = [
    {
        title: "Peerr",
        text: "Built a B to C product for a startup to provide a platform for peer to peer learning. This invloved using React and\
               Next js to build out the frontend, and firebase for the backend. This provided database storage and user authentication.",
        linkText: "View the current website here!",
        link: "https://peerr.io/"
    },
    {
        title: "Tetris AI auto player",
        text: "Using Object Oriented Design, I implemented a Tetris bot in Python with PyGame. This involved executing a genetic algorithm\
              consisting of a variety of heuristics.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/Tetris-Bot-Autoplayer"
    },
    {
        title: "Webscraper",
        text: "Using python webscraping libraries, such as BeautifulSoup, I was able to build a web scraper that extracts footballing\
               statistics for the top perofrming players in the Premier League. By hosting my code on Replit, I was able to repeat this\
               extraction weekly and populate the data into excel spreadsheets. These are then emailed to myself using smtp connections,\
               providing me greater insight into which players are more liekly to acheive higher scores in Fantasy Footbal.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/football-stats-web-scraper"
    },
    {
        title: "Personal Website",
        text: "I built this personal portoflio using React to help develop my web development skills with Javascript and CSS. I primarly\
               implemented pure CSS animations whilst also devling to different animation libraries, including framer-motion.",
        linkText: "View the code to build this website on my Github!",
        link: "https://github.com/zains719/personal-website"
    },
    {
        title: "Inventory Application",
        text: "I created an inventory Java web application for storing, searching and viewing lists of data. This was implemented using\
               Java servlets and JSP's in the mvc pattern through Object Oriented design",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/Java-Web-Application"
    },
    {
        title: "Bioreactor Vaccine Plant",
        text: "This was a collaborated project to produce a Bioractor vaccine plant for Tuberculosis. This required us to code an arduino\
               and PID control system to control the different environment variables.\
               This was then synced up with a user interface which was programmed in Python using tkinter.",
        linkText: "",
        link: ""
    },
]

const Projects = () => {
    return (
        <div className="project-container">
            <h1>Projects</h1>
            <div className="cards">
            {projects.map((project, index) => {
                return (
                <div class="card">
                    <div class="face1">
                        <div class="content">
                            {getProjectSvg(index)}
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
