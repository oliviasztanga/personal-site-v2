import React from 'react'
import styles from './styles.module.scss'
import Hello from '../Hello'

import Nav from '../Nav'

const Layout = ({ children }) => {

    return (
        <div className={styles.layout}>
            <Nav />
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