import React, { useState } from 'react'
import classnames from 'classnames'
import { Tabs, Tab, makeStyles, useMediaQuery } from '@material-ui/core'
import styles from './styles.module.scss'
import experience from '../../assets/content/experience'
import Section from '../Section'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexGrow: 1,
        minHeight: '20rem',
        justifyContent: 'flex-start'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        minWidth: 'min-content'
    },
    wrapper: {
        alignItems: 'flex-start',
        fontFamily: 'Karla, sans-serif',
        fontSize: 12,
        textTransform: 'none'
    }
}))

const useAltStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        display: 'flex',
        flexGrow: 1,
        minHeight: '32rem', //reconsider this?
        justifyContent: 'flex-start',
        flexDirection: "column"
    },
    tabs: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        minWidth: 'min-content'
    }
}))

const Experience = () => {
    const isTabletY = useMediaQuery('(max-width: 1000px) and (min-width: 850px)')
    const isPhone = useMediaQuery('(max-width: 500px)')
    const overrides = useStyles()
    const altOverrides = useAltStyles()
    const [tab, setTab] = useState(0)
    const changeTab = (event, newValue) => setTab(newValue)

    return (
        <Section number={'02'} title="Experience" >
            
            <div className={isTabletY || isPhone ? altOverrides.root : overrides.root}>
                <Tabs
                    orientation={isTabletY || isPhone ? "horizontal" : "vertical"}
                    variant="scrollable"
                    value={tab}
                    onChange={changeTab}
                    className={isTabletY || isPhone ? altOverrides.tabs : overrides.tabs}
                >
                    {experience.map(({ organization }) => <Tab 
                        key={organization}
                        label={organization}
                        disableRipple={true}
                        classes={{ wrapper: overrides.wrapper }}
                    />)}
                </Tabs>

                {experience.map(({ organization, url, title, start, end, bullets }, idx) => {
                    return (
                        <TabPanel key={idx} tab={tab} index={idx}>
                            <p className="p--16 mb--xxs">
                                {title}
                                <a 
                                    className="link type--bold" 
                                    style={{ color: '#e3abce' }} 
                                    href={url} target="_blank" 
                                    rel="noopener noreferrer"
                                > @ {organization}</a>
                            </p>
                            <p className="acc--12 type--upcase mb--xs">
                                {start} - {end}
                            </p>
                            <ul className={classnames(styles.bullets, "mb-sm")}>
                                {bullets.map((bullet, idx) => <li key={idx} className={styles.bullet}>{bullet}</li>)}
                            </ul>
                        </TabPanel>
                    )
                })}
                
            </div>

        </Section>
    )
}

const TabPanel = (props) => {
const { children, tab, index, ...other } = props

return (
    <div
    role="tabpanel"
    hidden={tab !== index}
    id={`vertical-tabpanel-${index}`}
    {...other}
    className={styles.tabPanel}
    >
    {tab === index && (
        <>
        {children}
        </>
    )}
    </div>
)
}

export default Experience