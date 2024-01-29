import React from 'react'
import './Home.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import SkillSet from '../skillset/SkillsSet'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import RedditIcon from '@mui/icons-material/Reddit';
export default function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_wrapper">
                    <div className="home_left">
                        <img src="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="home_right">
                        <div className="home_social">
                            <a href="https://www.linkedin.com/in/gudimetla-srikanth" target="_blank"><LinkedInIcon sx={{ fontSize: "50px" }} className='home_icon' /></a>
                            <a href="https://github.com/gudimetla-srikanth" target="_blank"><GitHubIcon sx={{ fontSize: "50px" }} className='home_icon' /></a>
                            <a href="https://www.instagram.com/srikanth_gudimetla93" target="_blank"><InstagramIcon sx={{ fontSize: "50px" }} className='home_icon' /></a>
                            <XIcon sx={{ fontSize: "50px" }} className='home_icon' />
                            <RedditIcon sx={{ fontSize: "50px" }} className='home_icon' />
                            <GoogleIcon sx={{ fontSize: "50px" }} className='home_icon' />
                        </div>
                        <div className="home_about">
                            Experienced software engineer with a strong background in full-stack development and expertise in multiple programming languages. Proven track record of designing and implementing scalable and efficient software solutions. Committed to continuous learning and staying abreast of industry trends to deliver high-quality, innovative software products. Eager to apply academic knowledge and learn new technologies in a collaborative and dynamic team environment. Enthusiastic about contributing to innovative projects and further developing technical skills.
                        </div>
                    </div>
                </div>
            </div>
            <SkillSet />
        </div>
    )
}
