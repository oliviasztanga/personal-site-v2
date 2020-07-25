import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import classnames from 'classnames'
import styles from './styles.module.scss'
import { scroll } from '../../utilities/misc'
import NavToggle from './NavToggle'

const Nav = () => {
    const [ navOpen, setNavOpen ] = useState(false)
    const toggleNav = () => setNavOpen(!navOpen)

    const handleClick = (title) => {
        scroll(title)
        toggleNav()
    }

    const background = useSpring({transform: navOpen ? 'scale(65)' : 'scale(0)'})
    const links = useSpring({ opacity: navOpen ? 1 : 0, marginLeft: navOpen ? '50%' : '0%' })

    return (
        <>
            <NavToggle navOpen={navOpen} toggleNav={toggleNav} />
            <div className={classnames(styles.links, navOpen ? {} : styles.hidden)}>
                <animated.div style={links} >
                    {
                        [['01', 'About'], ['02', 'Experience'], ['03', 'Projects']]
                        .map(([ number, title ]) => {
                            return <div 
                            className={styles.link}
                            onClick={() => handleClick(title)}
                            >
                                    <h2 className="h--2"><span className="h--num">{number}. </span>{title}</h2>
                                </div>
                            })
                        }
                </animated.div>
            </div>
            <animated.div className={styles.background} style={background} />
        </>
    )
}

export default Nav