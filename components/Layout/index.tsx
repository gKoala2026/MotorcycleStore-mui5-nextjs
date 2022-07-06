import type { NextPage } from 'next'

import Header from '../Header'
import Footer from '../Footer'
import React from 'react'

type LayoutProps = {
    children : React.ReactNode,
}

const Layout:NextPage<LayoutProps> = ({ children }) => {
    return(
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default Layout