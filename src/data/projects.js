import { WebScraper } from '../images/projects/WebScraper'
import { Peerr } from '../images/projects/Peerr'
import { Computer } from '../images/projects/Computer'
import { Inventory } from '../images/projects/Inventory'
import { Plant } from "../images/projects/Plant"
import { Tetris } from '../images/projects/Tetris'

export const projects = [
    {
        title: "Peerr",
        text: "Peerr is an online learning platform for UK medics based upon interactive custom made quizzes. I was able to deliver a B2C product that encapsulates Peerr's vision of socialised learning, which was then part of the King's 20 Accelerator programme.",
        linkText: "View the current website here!",
        link: "https://peerr.io/",
        svg: <Peerr />,
    },
    {
        title: "Tetris AI auto player",
        text: "Using Object-Oriented Design, I implemented a Tetris bot in Python with PyGame. This involved executing a genetic algorithm consisting of a variety of heuristics, where the goal was to achieve the highest score possible.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/Tetris-Bot-Autoplayer",
        svg: <Tetris />,
    },
    {
        title: "Fantasy Football Webscraper",
        text: "Using python web scraping libraries, such as BeautifulSoup, I was able to build a web scraper that extracts footballing statistics for the top-performing players in the Premier League. By hosting my code on Replit, I was able to repeat this extraction weekly and populate the data into excel spreadsheets.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/football-stats-web-scraper",
        svg: <WebScraper />,
    },
    {
        title: "Personal Website",
        text: "I built this personal portfolio using React to help enhance my web development skills with Javascript and CSS. I primarily implemented pure CSS animations whilst also delving into different animation libraries, including framer-motion.",
        linkText: "View the code to build this website on my Github!",
        link: "https://github.com/zains719/personal-website",
        svg: <Computer />,
    },
    {
        title: "Inventory Application",
        text: "I created an inventory Java web application for storing, searching and viewing lists of data. This was implemented using Java servlets and JSP's in the MVC pattern through Object-Oriented design.",
        linkText: "View the code on my Github!",
        link: "https://github.com/zains719/Java-Web-Application",
        svg: <Inventory />,
    },
    {
        title: "Bioreactor Vaccine Plant",
        text: "This was a collaborated project to produce a Bioreactor vaccine plant for Tuberculosis. This required us to code an Arduino and PID control system to control the different environment variables. This was then synced up with a user interface that was programmed in Python using Tkinter.",
        linkText: "",
        link: "",
        svg: <Plant />,
    },
]