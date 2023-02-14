import React from 'react';

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Homepage() {
    return(
        <section class="homepage">
            <div class="home-intro">
                <div>
                <img src=  
                    {require("../../images/brit_img.png")}
                    alt="picture of Brit Sovic" 
                    id="brit-picture"/>
                </div>
                <div>
                My name is Brit Sovic. I am an employee within the Divison of Infectious Diseases at Columbia University Irving Medical 
                Center. I created the inital CO-ENROLLMENT weekly screening process back in 2019. Since then, I have coded and developed
                 this program as a way to streamline and allow access to any one site individual at any point. A site member can enter
                 a participant into the system, confirm if they are a duplicate enrollee, and/or access site related statistics related
                 to study recruitment and enrollment.
                <br />
                I hope you enjoy this intial version. If you have any questions or suggestions to the site you can go to the 'Submit Error/Question' tab. I will receive the request and respond as soon as possible.
                </div>
            </div>

            <div class="home-about">
                    <h3>Brit Sovic, MPH</h3>
                <ul>
                    <li>Columbia University: Full Stack Web Development Coding Certificate</li>
                    <li>Tulane University School of Public Health and Tropical Medicine: MPH - Epidemiology </li>
                    <li>Syracuse University Falk College of Sport & Human Dynamics: BS - Public Health</li>
                </ul>
                <div>
                    <h3>Click the icon to find me on:</h3>
                    <li><a href="github link" target="_blank">< AiFillGithub /></a></li>
                    <li><a href="linkedin link" target="_blank">< AiFillLinkedin /></a></li>
                </div>
            </div>

            <div class="home-instructions">
                <h3>Table of Contents</h3>
                <ul>
                    <li>Add Participant Tab: add a participant</li>
                    <li>Check Participant Tab: check a participant</li>
                    <li>Site Stats: Site stats</li>
                    <li>Questions: send me a question or submit an error</li>
                </ul>
            </div>

            <div class="home-sites">
                <h3>Sites currently using this program:</h3>
                <li><img src=  
                    {require("../../images/bronx_logo.png")}
                    alt="picture of Brit Sovic" 
                    class="site-picture"/>
                </li>
                <li><img src=  
                    {require("../../images/cornell_logo.png")}
                    alt="picture of Brit Sovic" 
                    class="site-picture"/>
                </li>
                <li><img src=  
                    {require("../../images/cuimc_logo.png")}
                    alt="picture of Brit Sovic" 
                    class="site-picture"/>
                </li>
                <li><img src=  
                    {require("../../images/harlem_logo.png")}
                    alt="picture of Brit Sovic" 
                    class="site-picture"/>
                </li>
                <li><img src=  
                    {require("../../images/nybc_logo.png")}
                    alt="picture of Brit Sovic" 
                    class="site-picture"/>
                </li>
                <li><img src=  
                    {require("../../images/rutgers_logo.png")}
                    alt="picture of Brit Sovic" 
                    class="site-picture"/>
                </li>
            </div>  
        </section>
    )
};

export default Homepage;