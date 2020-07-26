import React from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './styles.module.scss'
import Hello from '../Hello'
import Nav from '../Nav'

const Layout = ({ children }) => {
    const entrance = useSpring({ from: { opacity: 0 }, to: { opacity: 1 } })

    return (
        <animated.div className={styles.layout} style={entrance} >
            <Nav />
            <div className={styles.fixed}>
                <Hello />
            </div>
            <div className={styles.scroll}>
                {children}
            </div>
        </animated.div>
    )
}

export default Layout