import './Contact.scss'
import Instagram from "../../images/socials/Instagram"
import Github from "../../images/socials/Github"
import LinkedIn from "../../images/socials/LinkedIn"
import Resume from "../../images/socials/Resume"
import { motion } from "framer-motion"
import { useState } from 'react'
var _ = require('lodash')

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div className="contact-section">
            <div class="contact-container">
                <h2>Contact Me</h2>
                <form action="https://formsubmit.co/zain.14saleem@gmail.com" method="POST">
                    <div class="user-box">
                        <input 
                        type="text" 
                        name="name" 
                        onChange={(e) => setName(e.target.value)} 
                        />
                        {_.isEmpty(name) && (
                            <label>Name</label>
                        )}
                    </div>
                    <div class="user-box">
                        <input 
                        type="email" 
                        name="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        {_.isEmpty(email) && (
                            <label>Email</label>
                        )}                    </div>
                    <div class="user-box">
                        <input 
                        type="text" 
                        name="message" 
                        onChange={(e) => setMessage(e.target.value)}
                        />
                        {_.isEmpty(message) && (
                            <label>Message</label>
                        )}                    </div>
                    <a href="/">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <input type='submit' value="Submit" />
                    </a>
                </form>
            </div>     
            <div className="socials">
                <motion.div className="social">
                    <a href="https://github.com/zains719"><Github /></a>
                </motion.div>
                <motion.div className="social">
                    <a href="https://www.instagram.com/_zain719/"><Instagram /></a>
                </motion.div>
                <motion.div className="social">
                    <a href="https://www.linkedin.com/in/zain-saleem-137603211/"><LinkedIn /></a>                    
                </motion.div>
                <motion.div className="social">
                    <a href="/Zain-Saleem-CV.pdf" download><Resume /></a>                    
                </motion.div>
            </div> 
        </div>
    )
}

export default Contact