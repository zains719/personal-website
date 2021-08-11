import { WebScraper } from '../images/projects/WebScraper'
import { Peerr } from '../images/projects/Peerr'
import { Computer } from '../images/projects/Computer'
import { Inventory } from '../images/projects/Inventory'
import { Plant } from "../images/projects/Plant"
import { Tetris } from '../images/projects/Tetris'

export const projects = [
    {
        title: "Peerr",
        text: "Built a B to C product for a startup to provide a platform for peer to peer learning. This invloved using React and\
               Next js to build out the frontend, and firebase for the backend. This provided database storage and user authentication.",
        linkText: "View the current website here!",
        link: "https://peerr.io/",
        svg: <Peerr />,
    },
    {
        title: "Tetris AI auto player",
        text: "Using Object Oriented Design, I implemented a Tetris bot in Python with PyGame. This involved executing a genetic algorithm\
              consisting of a variety of heuristics.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/Tetris-Bot-Autoplayer",
        svg: <Tetris />,
    },
    {
        title: "Webscraper",
        text: "Using python webscraping libraries, such as BeautifulSoup, I was able to build a web scraper that extracts footballing\
               statistics for the top perofrming players in the Premier League. By hosting my code on Replit, I was able to repeat this\
               extraction weekly and populate the data into excel spreadsheets. These are then emailed to myself using smtp connections,\
               providing me greater insight into which players are more liekly to acheive higher scores in Fantasy Footbal.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/football-stats-web-scraper",
        svg: <WebScraper />,
    },
    {
        title: "Personal Website",
        text: "I built this personal portoflio using React to help develop my web development skills with Javascript and CSS. I primarly\
               implemented pure CSS animations whilst also devling to different animation libraries, including framer-motion.",
        linkText: "View the code to build this website on my Github!",
        link: "https://github.com/zains719/personal-website",
        svg: <Computer />,
    },
    {
        title: "Inventory Application",
        text: "I created an inventory Java web application for storing, searching and viewing lists of data. This was implemented using\
               Java servlets and JSP's in the mvc pattern through Object Oriented design",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/Java-Web-Application",
        svg: <Inventory />,
    },
    {
        title: "Bioreactor Vaccine Plant",
        text: "This was a collaborated project to produce a Bioractor vaccine plant for Tuberculosis. This required us to code an arduino\
               and PID control system to control the different environment variables.\
               This was then synced up with a user interface which was programmed in Python using tkinter.",
        linkText: "",
        link: "",
        svg: <Plant />,
    },
]