import "./hero.scss"
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

const buttonVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 3,
            delay: 3,
        },
    }
}

const Hero = () => {    
    return (
        <div className="hero">
            {/* <div className="particles-js" id='particles-js'/> */}
            <div className="content">
                <h1 className="title">hi, <span>zain</span> here.</h1>
                <div className="subcontent">
                    <p className="subheading">I create stuff sometimes.</p>
                    <p className="caption">
                        I'm a software engineer based in London. I am an avid programmer
                        sharing great interests in full-stack development, artifical intelligence, 
                        human computer interaction and everything tech.
                    </p>
                </div>
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