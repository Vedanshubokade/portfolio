import "./footer.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
const footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Pune,viman Nagar....</p>
                            <p>India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />8329595328</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />vedanshubokade@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>I am a developer </p>
                    <div className="social">
                        <Link to="https://www.facebook.com/profile.php?id=100004434798444&mibextid=ZbWKwL"><FaFacebook size={30} style={{ color: "white", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://instagram.com/_vedanshu__9?igshid=ZDdkNTZiNTM="><FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/vedanshu-bokade-5b1416231">
                            <FaLinkedin size={30} style={{ color: "white", marginRight: "1rem" }} />
                        </Link>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer