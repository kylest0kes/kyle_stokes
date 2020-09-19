import React from 'react';

import './style.css'

export default function Contact() {
    return (
        <div className="jumbotron shaded contact">
            <h1>Contact</h1>
            <form action="">
                <div className="row">
                    <div className="small-12 column">
                        <div className="form-floating-label">
                            <input type="email" id="email" name="email" required/>
                            <label for="email">Name</label>
                        </div>
                    </div>
                    <div className="small-12 column">
                        <div className="form-floating-label">
                            <input type="text" id="password" name="password"/>
                            <label for="password">Email</label>
                        </div>
                    </div>
                    <div className="small-12 column">
                        <div className="form-floating-label">
                            <textarea name="" id="" rows="5" placeholder=""></textarea>
                            <label for="textarea">Your Message</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}