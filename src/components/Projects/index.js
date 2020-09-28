import React from 'react';
import InkCentral from '../../images/inkcentral.png';
import PostToSold from '../../images/posttosold.png';
import BrewForYou from '../../images/brewforyou.png';
import NoteTaker from '../../images/notetaker.png';
import WeatherApp from '../../images/weatherapp.png';
import PassGen from '../../images/passgen.png';

import './style.css'

export default function Projects() {
    return (
        <div className="jumbotron shaded projects">
            <h1>Projects</h1>
            <hr/>
            <div className="article-row-section">
            <div className="article-row-section-inner">

                <article className="article-row">
                    <div className="article-row-img">
                        <div class="image-hover-wrapper">
                            <a href="https://ink-central.herokuapp.com/" target="blank"><img src={InkCentral} alt="inkcentral"/>
                                <span class="image-hover-wrapper-reveal">
                                <p>View Live<br/><i class="fas fa-eye"></i></p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="article-row-content">
                        <h1 className="article-row-content-header">Ink Central</h1>
                        <p className="article-row-content-description">Ink Central is a tattoo social networking application, with the main goal of connecting artists and clients, to streamline the growth of tattoo culture. Artists and Canvases can immediately connect about available tattoos, or tattoo ideas and skip the long process of searching multiple websites for the right fit.</p>
                        <br/>
                        <h5 className="article-row-content-tech">Technologies Used</h5>   
                        <p className="article-row-content-description">React.js, MongoDB, Express, Node, Foundation Framework, Mongoose, Axios, Passport.js, Filestack API, Heroku, MongoDB Atlas.</p>
                        <p className="article-row-content-author"><a href="https://github.com/kylest0kes/ink_central" target="blank" className="project-github"><i class="fab fa-github-square"></i></a></p>
                    </div>
                </article>
                
                <article className="article-row article-row-reversed">
                    <div className="article-row-img">
                        <div class="image-hover-wrapper">
                            <a href="https://pr0jectnum2.herokuapp.com/" target="blank"><img src={PostToSold}/>
                                <span class="image-hover-wrapper-reveal">
                                <p>View Live<br/><i class="fas fa-eye"></i></p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="article-row-content">
                        <h1 className="article-row-content-header">Post To Sold</h1>
                        <p className="article-row-content-description">Post To Sold is your typical Garage Sale, but totally online. A user is able to create an account, and from there they can view all of the items up for sale, post their own items, and purchase any items of interest.</p>
                        <br/>
                        <h5 className="article-row-content-tech">Technologies Used</h5>   
                        <p className="article-row-content-description">JQuery, Filestack API, Express, Express Handlebars, MySQL, Sequelize, Workbench, Heroku, Materialize.</p>
                        <p className="article-row-content-author"><a href="https://github.com/kimnana45/Post-To-Sold" target="blank" className="project-github"><i class="fab fa-github-square"></i></a></p>
                    </div>
                </article>
                
                <article className="article-row">
                    <div className="article-row-img">
                        <div class="image-hover-wrapper">
                            <a href="https://eunahk92.github.io/brew-for-you/" target="blank"><img src={BrewForYou}/>
                                <span class="image-hover-wrapper-reveal">
                                <p>View Live<br/><i class="fas fa-eye"></i></p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="article-row-content">
                        <h1 className="article-row-content-header">Brew For You</h1>
                        <p className="article-row-content-description">Brew For You is your one stop shop for all things breweries. If you’re traveling and want a list of breweries near you, or just looking to find a new, hidden gem in your local area, you can do all this, and more with Brew For You. Click the image and start exploring new breweries today!</p>
                        <br/>
                        <h5 className="article-row-content-tech">Technologies Used</h5>   
                        <p className="article-row-content-description">JQuery, Open Brewery DB API, Google Maps API, Google Maps Geolocation, UIKit.</p>
                        <p className="article-row-content-author"><a href="https://github.com/eunahk92/brew-for-you" className="project-github" target="blank"><i class="fab fa-github-square"></i></a></p>
                    </div>
                </article>
                
                <article className="article-row article-row-reversed">
                    <div className="article-row-img">
                        <div class="image-hover-wrapper">
                            <a href="https://notetakerhw11ks.herokuapp.com/" target="blank"><img src={NoteTaker}/>
                                <span class="image-hover-wrapper-reveal">
                                <p>View Live<br/><i class="fas fa-eye"></i></p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="article-row-content">
                        <h1 className="article-row-content-header">Note Taker</h1>
                        <p className="article-row-content-description">This application is essentially your basic note taking app. Deployed through Heroku, the user is prompted to the start up page, where, upon entering, the user is able to add new notes, see saved, notes, and delete existing notes.</p>
                        <br/>
                        <h5 className="article-row-content-tech">Technologies Used</h5>   
                        <p className="article-row-content-description">HTML 5, CSS, JQuery, JSON, Express, AJAX</p>
                        <p className="article-row-content-author"><a href="https://github.com/kylest0kes/note_taker" target="blank" className="project-github"><i class="fab fa-github-square"></i></a></p>
                    </div>
                </article>
                   
                <article className="article-row">
                    <div className="article-row-img">
                        <div class="image-hover-wrapper">
                            <a href="https://kylest0kes.github.io/weather_app/" target="blank"><img src={WeatherApp}/>
                                <span class="image-hover-wrapper-reveal">
                                <p>View Live<br/><i class="fas fa-eye"></i></p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="article-row-content">
                    <h1 className="article-row-content-header">Weather Dashboard</h1>
                    <p className="article-row-content-description">If there is one thing that is ever-changing in our lives, it is the weather. We are always trying to stay curent with it, as it can effect, and possibly ruin our plans. So with this weather dashboard application, the goal is to make the user aware of the weather for any desired loction.</p>
                    <br/>
                    <h5 className="article-row-content-tech">Technologies Used</h5>   
                    <p className="article-row-content-description">HTML 5, CSS, JQuery, Bootstrap, OpenWeather API (Current Weather, 5-day forecast, UV Index).</p>
                    <p className="article-row-content-author"><a href="https://github.com/kylest0kes/weather_app" target="blank" className="project-github"><i class="fab fa-github-square"></i></a></p>
                    </div>
                </article>
            
                <article className="article-row article-row-reversed">
                    <div className="article-row-img">
                        <div class="image-hover-wrapper">
                            <a href="https://kylest0kes.github.io/password_generator/" target="blank"><img src={PassGen}/>
                                <span class="image-hover-wrapper-reveal">
                                <p>View Live<br/><i class="fas fa-eye"></i></p>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="article-row-content">
                    <h1 className="article-row-content-header">Password Generator</h1>
                    <p className="article-row-content-description">In todays digital world, a secure password is a staple in any good practice to keep yourself and your accounts safe online. Introducing my Random Password Generator. Follow all the alerts, and it will generate a random password.</p>
                    <br/>
                    <h5 className="article-row-content-tech">Technologies Used</h5>   
                    <p className="article-row-content-description">HTML 5, CSS, Javascript</p>
                    <p className="article-row-content-author"><a href="https://github.com/kylest0kes/password_generator" target="blank" className="project-github"><i class="fab fa-github-square"></i></a></p>
                    </div>
                </article>
                
            </div>
        </div>
        </div>
    )
}