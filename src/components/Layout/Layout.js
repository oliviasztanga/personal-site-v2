import React, { useState } from 'react'
import styles from './styles.module.scss'

import Hello from '../Hello'

const Layout = ({ children }) => {
    const [ navOpen, setNavOpen ] = useState(false)
    const toggleNav = () => setNavOpen(!navOpen)

    return (
        <div className={styles.layout}>
            <div className={styles.fixed}>
                <Hello />
            </div>
            <div className={styles.scroll}>
                {children}
            </div>
        </div>
    )
}

export default Layout