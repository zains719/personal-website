import { motion } from "framer-motion"
import "./text.scss"

const Text = () => {
    const text = "Hi, welcome to my protfolio website. Click and drag the letters!"

    const sentence = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        }
    }

    const letter = {
        hidden: {
            opacity: 0,
            y: 400,
        },
        visible: {
            opacity: 1,
            y: -300,
        }
    }

    return (
        <div className="text-container">
            <motion.p
                className="text"
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {text.split("").map((char, index) => {
                    return (
                        <motion.span variants={letter} key={index}>
                            {char}
                        </motion.span>
                    )
                })}
            </motion.p>
        </div>
    )
}

export default Text