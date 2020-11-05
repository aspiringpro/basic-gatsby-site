import React from 'react'

import "../styles/global.scss"
import layoutStyles from "./layout.module.scss"


import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header className={layoutStyles.header}/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
