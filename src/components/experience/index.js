import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css'
import './Experience.scss'
import { Experiences } from '../../data/experiences';
import { useState } from 'react'
import { BiRightArrow } from 'react-icons/bi'

const Experience = () => {
    const [currentExperience, setCurrentExperience] = useState(Experiences[0]);

    return (
        <div className="experience-container" id="experience">
            <h1><span>/</span> experience</h1>
            <div className="content">
                <div className="links-container">
                    <div className="links">
                        {Experiences.map(experience => {
                            return (
                                <p 
                                className={experience.title == currentExperience.title ? "current-link" : "link"}
                                onClick={(e) => setCurrentExperience(experience)}
                                >
                                    {experience.title.toUpperCase()}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div className="link-content">
                    <h2>{currentExperience.role} @ <span>{currentExperience.title}</span></h2>
                    <p className="date">{currentExperience.date}</p>
                    {Experiences.map(experience => {
                        return (
                            <div className={experience == currentExperience ? "current-experience" : "experience"}>
                                {experience.description.map(point=> {
                                    return (
                                        <div className="point">
                                            <BiRightArrow className="arrow" size={"18px"}/>
                                            <p>{point}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience