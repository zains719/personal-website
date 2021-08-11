import "./hero.scss"
import BouncyTitle from "./bouncyTitle"
import Text from "./text"
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"

const buttonVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 3,
            delay: 8,
        },
    }
}

const Hero = () => {
    const title = "Zain Saleem"

    const [showText, setShowText] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowText(true)
        }, 4000)
    }, [])

    return (
        <div className="hero">
            <div className="particles-js" id='particles-js'/>
            <div className="content">
                <BouncyTitle>{ title }</BouncyTitle>
                {showText && <Text />}
                <Link 
                to="about" 
                smooth 
                >
                    <motion.button
                    className="button" 
                    initial='hidden'
                    animate='visible'
                    variants={buttonVariants}
                    >
                        Find Out More
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}

export default Hero