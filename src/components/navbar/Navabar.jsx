import React from 'react'
import './Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from 'react-router-dom'
export default function Navabar() {
    return (
        <div className="navbar">

            <div className="navbar_wrapper">
                <div className="nav_center">
                    <h1>myportfolio.</h1></div>
                <div className="nav_center res1">
                    <div className="nav_home"><Link to='/' className='link'>Home</Link></div>
                    <div className="nav_home"><Link to='/projects' className='link'>Projects</Link></div>
                    <div className="nav_home"><Link to='/education' className='link'>Education & Experiance</Link></div>
                </div>
                <div className="nav_center res">
                    <div className="nav_home"><Link to='/' className='link'><HomeIcon /></Link></div>
                    <div className="nav_home"><Link to='/projects' className='link'><AccountTreeIcon /></Link></div>
                    <div className="nav_home"><Link to='/education' className='link'><WorkHistoryIcon /></Link></div>
                </div>
            </div>
        </div>
    )
}
