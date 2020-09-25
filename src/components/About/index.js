import React from 'react';
import kyle1 from '../../images/kyle1.jpg'

import './style.css'

export default function About() {
    return (
        <div className="jumbotron">
            <h1>About</h1>
            <hr/>
            <div className="grid-container">
                {/* TOP ICONS */}
                <div className="grid-x grid-margin-x about-three">
                    <div className="cell small-4">
                        <p><i className="fas icon-three fa-thumbs-up"></i></p>
                        <h4 className="marketing-site-three-up-title">Keyless Entry</h4>
                        <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p> 
                    </div>
                    <div className="cell small-4">
                        <p><i className="fas icon-three fa-thumbs-up"></i></p>
                        <h4 className="marketing-site-three-up-title">Keyless Entry</h4>
                        <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
                    </div>
                    <div className="cell small-4">
                        <p><i className="fas icon-three fa-thumbs-up"></i></p>
                        <h4 className="marketing-site-three-up-title">Keyless Entry</h4>
                        <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
                    </div>
                </div>
                {/* ABOUT BODY */}
                <div className="grid-x grid-margin-x about-three">
                    <div className="cell small-6">
                        <img className="about-img" alt="kyle" src={kyle1}/>
                        <p className="about-subtitle" >Full Stack Web Developer with a reputation for thoroughness, determination, and a passion for web design.</p>
                    </div>
                    <div className="cell small-6">
                        <p className="about-bio">Hello world, I am Kyle! Ever since the first time I browsed my AOL Kids account on the family computer some 20+ years ago, I have always had an interest and curiosity into the inner workings of the web. As I got older, and as websites and the technology behind them became more advanced, naturally my curiosity increased. Now, being immersed in the world of Full Stack web development, I am ready to leave my mark, the same way those first websites left their mark on me.</p>
                    </div>
                </div>
                {/* ABOUT SKILLS */}
                <div className="tech-skills">
                    <h3>Technical Skills</h3>
                    <p className="about-skills">Node.Js., Express, JavaScript, jQuery, React.js, React, JSX, GIT, GitHub, MongoDB, MySQL, Mongoose, Handlebars,
                    HTML5, CSS3, Bootstrap, Materialize, APIs, Heroku, Terminal, AJAX, Restful API, ES6, JSON, Sequelize, MERN stack,
                    Foundation</p>
                </div>
            </div>
            
            
        </div>
    )
}
