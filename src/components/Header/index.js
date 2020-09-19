import React from 'react';
import resume from '../../images/resume.pdf';


import './style.css'

export default function Header() {
    return (
            <div className="header position-sticky">
                <ul className="menu vertical medium-horizontal">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href={resume} target="blank">Resume</a></li>
                </ul>
            </div>
    )
}
