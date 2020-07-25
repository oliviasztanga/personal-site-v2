import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'
import skills from '../../assets/content/skills'
import { SVG } from '../Misc'

const Skills = () => {

    return (
        <div className={styles.scroll}>
            <SVG extension="#icon-chevron-down" classname={styles.chevronLeft} />
            <ul className={styles.skills}>
                {skills.map(skill => <li key={skill} className={classnames("acc--14", styles.item)}>{skill}</li>)}
            </ul>
            <SVG extension="#icon-chevron-down" classname={styles.chevronRight} />
        </div>
    )
}

export default Skills