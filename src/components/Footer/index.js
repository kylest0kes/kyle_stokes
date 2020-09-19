import React from 'react'

import './style.css'

export default function Footer() {
    return (
        <footer>
            <div class="rounded-social-buttons">
                <a class="social-button linkedin" href="https://www.linkedin.com/in/kylest0kes/" target="blank"></a>
                <a class="social-button github" href="https://github.com/kylest0kes" target="blank"></a>
            </div>
            <div className="footer-info">
                <p>Kyle Stokes</p>
                <p>© 2020</p>
            </div>
        </footer>
    )
}
