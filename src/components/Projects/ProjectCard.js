import React from 'react'
import styles from './styles.module.scss'

import { openInNewTab } from '../../utilities/misc'

const ProjectCard = ({ language, title, github, description }) => {

    return (
        <div className={styles.projectCard} onClick={() => openInNewTab(github)}>
            <p className="acc--14 type--upcase mb--xxs">{language}</p>
            <p className="p--20 mb--sm">{title}</p>
            <p className="p--12">{description}</p>
        </div>
    )
}

export default ProjectCard