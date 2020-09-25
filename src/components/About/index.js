import React from 'react';

import './style.css'

export default function About() {
    return (
        <div className="jumbotron">
            <h1>About</h1>
            <hr/>
            <div className="row about-three">
                <div className="col">
                    <p><i className="fas icon-three fa-thumbs-up"></i></p>
                    <h4 className="marketing-site-three-up-title">Keyless Entry</h4>
                    <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
                </div>
                <div className="col">
                    <p><i className="fa icon-three fa-user-o" aria-hidden="true"></i></p>
                    <h4 className="marketing-site-three-up-title">Invincible Igloo</h4>
                    <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
                </div>
                <div className="col">
                    <p><i className="fa icon-three fa-user-o" aria-hidden="true"></i></p>
                    <h4 className="marketing-site-three-up-title">Invincible Igloo</h4>
                    <p className="marketing-site-three-up-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sint, voluptatibus eaque natus ad eius.</p>
                </div>
            </div>
            
        </div>
    )
}
