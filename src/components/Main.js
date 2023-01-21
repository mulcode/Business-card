import React from "react"
import email from "./images/email.png"
import linkedin from "./images/linkedin.jpg"

export default function Main(){
    return(
        <div className="main-container">
            <h3 className="main-h3">Business card</h3>
            <h4 className="main-h4">Frontend developer</h4>
            <span className="main-span">Website link Appear</span>
            <div className="btn-class">
            <button className="main-button btn-email">
            <img src={email} alt="" width="40px" height="40px" className="email" />Email
            </button>
            <button className="main-button btn-linkedin">
            <img src={linkedin} alt="" width="40px" height="40px" className="linked"/>Linkedin
            </button>
            </div>
            <div className="about-interest">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h3>Interest</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}