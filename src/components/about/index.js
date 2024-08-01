import './About.scss'
import { motion, useViewportScroll, useTransform } from "framer-motion"
  
const isMobile = () => {
    return window.innerWidth < 1400
}

const About = () => {
    const { scrollYProgress } = useViewportScroll()
    const scale = useTransform(scrollYProgress, [0, 1], !isMobile() ? [0.8, 1.6] : [0.7, 1.2]);

    return (
        <motion.div className="about" id="about">
            <h1><span>/</span> about me</h1>
            <div className='content'>
                <motion.img src='/images/me.jpg' width={!isMobile() ? 400 : 500} height={!isMobile() ? 550: 650} 
                style={{
                    scaleY: scale,
                    scaleX: scale,
                }} 
                />
                <div className="text-container">
                    <p>
                        I have recently graduated, obtaining an MEng in Computer Science at University College London and will
                        soon begin a full time software engineer role at Bloomberg. I am always keen 
                        to learn new technologies and work on exciting, challenging projects.
                        <br /> <br />
                        Throughout my academic journey, I've been lucky to intern with both startups and big tech companies. 
                        These experiences have given me a taste of what it's like to build both B2C and B2B products. 
                        Along the way, I've picked up great skills in bringing ideas to life and collaborating effectively with teams.
                        <br /> <br />
                        Beyond the life of coding, I'm an avid sports enthusiast with a great passion for football, 
                        MMA and boxing, among others.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About