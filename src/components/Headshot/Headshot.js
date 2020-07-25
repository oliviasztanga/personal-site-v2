import React from 'react'
import styles from './styles.module.scss'
import headshot from '../../assets/images/headshot.png'

const Headshot = () => {

    return (
        <div className={styles.container}>
                <img className={styles.headshot} src={headshot} alt="headshot" />
        </div>
    )
}

export default Headshot