import { motion } from "framer-motion"
import "./bouncyTitle.scss"

const titleVariants = {
    after: {
       transition: {
          staggerChildren: 0.3,
        }
     }
}

const letterVariants = {
   before: {
       opacity: 0,
       y: -200,
   },
   after: {
       opacity: 1,
       y: -100,
       transition: {
           duration: 5,
           type: "spring",
           damping: 5,
           stiffness: 200,
       }
   },
   bouncing: {
       y: [195, 205],
       transition: {
           yoyo: Infinity,
       }
   }
}

const BouncyTitle = ({ children }) => {
    const letterWidth = 80

    return (
        <div className="container">
            <motion.h1
                variants={titleVariants}
                initial="before"
                animate="after"
                className="title"
            >
                {Array.from(children).map((char, index) => {
                    return (
                        <motion.span
                            key={index}
                            className="letter"
                            variants={letterVariants}
                            drag
                            dragConstraints={{
                                top: -400,
                                bottom: 400,
                                right: 1500 - (index * letterWidth),
                                left: -10 - (index * letterWidth),
                            }}
                        >
                            {char}
                        </motion.span>
                    )
                })}
            </motion.h1>
        </div>
    )
}

export default BouncyTitle