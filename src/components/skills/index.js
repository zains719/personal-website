import './Skills.scss'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react'
import { TiTick } from 'react-icons/ti'
import { AiFillStar } from 'react-icons/ai'
var _ = require('lodash')

const skills = [
    {
        title: 'Python',
        stars: _.fill(Array(4), 0),
    },
    {
        title: 'Java',
        stars: _.fill(Array(3), 0),
    },
    {
        title: 'Javascript',
        stars: _.fill(Array(4), 0),
    },
    {
        title: 'C',
        stars: _.fill(Array(2), 0),
    },
    {
        title: 'Haskell',
        stars: _.fill(Array(2), 0),
    }
]

const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            {skills.map((skill) => {
                return (
                    <SkillContainer skill={skill} />
                )
            })}
        </div>
    )
}

export default Skills


const SkillContainer = ({ skill }) => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    
    useEffect(() => {
        if (inView) {
        controls.start("visible")
        }
    }, [controls, inView])
    
    return (
        <motion.div
        className="skill-container"
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.3 }}
        variants={{
            visible: { 
                opacity: 1, 
                transition: {
                    duration: 1
                },
            },
            hidden: { opacity: 0 }
        }}
        >
            <TiTick className="tick" size={50}/>
            <div className="skill-right-section">
                <h2>{skill.title}</h2>
                <div className="stars-sction">
                    {skill.stars.map(() => {
                        return (
                            <AiFillStar className="stars" size={25} fill="#FF522C"/>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}