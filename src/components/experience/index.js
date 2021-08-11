import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css'
import './Experience.scss'
import { Experiences } from '../../data/experiences';


const Experience = () => {
    return (
        <div className="experience-container" id="experience">
            <h1>Experience</h1>
            <div className="vericalChanging">
                <VerticalTimeline>
                    {Experiences.map((experience) => {
                        return (
                        <VerticalTimelineElement className="vertical-timeline-element" icon={experience.icon} >
                            <a className="vertical-timeline-element-title" href={experience.link} >
                                {experience.title}
                            </a>
                            <h4 className="vertical-timeline-element-subtitle">
                                {experience.role}
                            </h4>                            
                            {experience.description.map((line) => {
                                return (
                                    <p>- {line}</p>
                                )
                            })}
                        </VerticalTimelineElement>
                        )
                    })}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Experience