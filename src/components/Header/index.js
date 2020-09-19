import React from 'react';
import resume from '../../images/resume.pdf';


import './style.css'

export default function Header() {
    return (
            <div className="header position-sticky">
                <ul className="menu vertical medium-horizontal">
                    <li><a className="header-links" href="#">Home</a></li>
                    <li><a className="header-links" href="#">About</a></li>
                    <li><a className="header-links" href="#">Projects</a></li>
                    <li><a className="header-links" href="#">Contact</a></li>
                    <li><a className="header-links" href={resume} target="blank">Resume</a></li>
                </ul>
            </div>
    )
}
