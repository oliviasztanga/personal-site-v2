import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.scss'

import { github, linkedin, email } from '../../assets/content/links'
import resume from '../../assets/content/resume.pdf'

import { openInNewTab } from '../../utilities/misc'
import { SVG } from '../Misc'

const Hello = () => {

    return (
        <section className={classnames(styles.hello, "p--sm")}>
            <h1 className="h--1">Hi, I'm Olivia</h1>
            <h1 className="h--1 mb--lg">& I love to build things</h1>
            <p className="p--20 mb--sm">
                I am a <span className="type--bold">software engineer</span> based out of <span className="type--bold">New York, NY</span>.
            </p>

            <div className={styles.socials}>
                {
                    [
                        ['LinkedIn', linkedin, '#icon-linkedin-with-circle'],
                        ['GitHub', github, '#icon-github-with-circle'],
                        ['Email', email, '#icon-envelope-with-circle'],
                        ['Resume', resume ]
                    ].map(([ title, url, icon ], idx) => <LinkItem key={idx} title={title} url={url} icon={icon} />)
                }
            </div>
        </section>
    )
}

const LinkItem = ({ title, url, icon }) => {
    
    return (
        <div className={classnames("link", styles.socialsItem)} onClick={() => openInNewTab(url)} >
            { icon && <SVG extension={icon} />}
            <p className="p--12">{title}</p>
        </div>
    )
}

export default Hello