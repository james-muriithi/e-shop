import React from "react"
import PropTypes from "prop-types"

import Navbar from "../navbar/Navbar"
import "./layout.css"

const Layout = ({ children }) => {

    return (
        <>
            <div>
                <Navbar />

                <main>{children}</main>

                <footer>
                    Â© {new Date().getFullYear()}
                </footer>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
