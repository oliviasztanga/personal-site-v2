import React from 'react'
import styles from './styles.module.scss'

const Section = ({ children, number, title }) => {

    return (
        <section id={title} className={styles.section}>
            <h2 className="h--2 mb--md"><span className="h--num">{number}. </span>{title}</h2>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    )
}

export default Section