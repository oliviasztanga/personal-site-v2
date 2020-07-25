import React from 'react'
import styles from './styles.module.scss'

const NavToggle = ({ navOpen, toggleNav }) => {

    return (
        <button
            className={styles.toggle}
            onClick={toggleNav}
        >
            <span 
                className={navOpen ? styles.hamburger_active : styles.hamburger_inactive}
            >&nbsp;</span>
        </button>
    )
}

export default NavToggle