import React from "react"
import PropTypes from "prop-types"

import Navbar from "../navbar/Navbar"
import "./layout.css"
import Footer from "../footer/Footer"

const Layout = ({ children }) => {

    return (
        <>
            <div style={{overflowX: "hidden"}}>
                <Navbar />

                <main>{children}</main>

                <Footer />
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
