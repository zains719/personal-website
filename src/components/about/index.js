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
            <h1>About</h1>
            <div className='content'>
                <motion.img src='/images/me.jpg' width={600} height={800} 
                style={{
                    scaleY: scale,
                    scaleX: scale,
                }} 
                />
                <div className="text-container">
                    <p>
                        Hi, my name is Zain. I am currently pursuing a BSc in Computer Science at University College London (1st year) and have a great passion for technology.
                        <br /> <br />
                        Whilst studying for my degree, I have also interned at different startups - helping translate innovative ideas into products that make waves in their industry. 
                        These experiences have given me a root level exposure to building B2C products and then taking them to market.
                        <br /> <br />
                        Beyond the life of coding, I am also a Sports enthusiast, sharing great interests in football, MMA and boxing amongst many others 
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default About