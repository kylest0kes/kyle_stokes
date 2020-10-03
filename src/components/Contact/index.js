import React from 'react';

import './style.css'

export default function Contact() {
    return (
        <div className="container">
            <div className="jumbotron contact">
                <h1>Contact</h1>
                <hr/>
                <h4>For business inquires, questions, or comments</h4>
                <ul className="stats-list">
                    <li>
                        LinkedIn <span className="stats-list-label">linkedin.com/in/kylest0kes/</span>
                    </li>
                    <li>
                        Email <span className="stats-list-label">kylestokes1551@gmail.com</span>
                    </li>
                    <li>
                        Github <span className="stats-list-label">github.com/kylest0kes</span>
                    </li>
                </ul>
                <form action="">
                    <div className="row">
                        <div className="small-12 column">
                            <div className="form-floating-label">
                                <input type="text" id="name" name="name" required/>
                                <label for="name">Name</label>
                            </div>
                        </div>
                        <div className="small-12 column">
                            <div className="form-floating-label">
                                <input type="text" id="email" name="email"/>
                                <label for="email">Email</label>
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
                <button type="submit" class="btn">Send</button>
            </div>
        </div>    
    )
}