import React from 'react'


import './style.css'

export default function Header() {
    return (
            <div className="header position-sticky">
                <ul className="menu vertical medium-horizontal">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
    )
}
