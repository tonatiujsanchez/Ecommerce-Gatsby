import React from "react"
import Header from "./header"
import ShoppingCart from "./ShoppingCart"

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <ShoppingCart />
            <main>{children}</main>
            <footer>
                © <a href="https://www.gatsbyjs.org" className="hover:text-blue-600">Tonatiuj Sánchez</a>
            </footer>

        </>
    )
}

export default Layout
