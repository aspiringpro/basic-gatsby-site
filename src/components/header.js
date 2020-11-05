import React from 'react'
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
    return (
        <header>
            <h2>Basic Gatsby Website</h2>
            <nav>
                <ul>
                    <li><Link to="/" className={headerStyles.link}>Home</Link></li>
                    <li><Link to="/about" className={headerStyles.link}>About</Link></li>
                    <li><Link to="/blog" className={headerStyles.link}>Blog</Link></li>
                    <li><Link to="/contact" className={headerStyles.link}>Contact</Link></li>
            
                </ul>
            </nav>
        </header>
    )
}

export default Header
