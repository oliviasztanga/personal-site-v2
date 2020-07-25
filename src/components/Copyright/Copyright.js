import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './styles.module.scss'
import { github } from '../../assets/content/links'
import { SVG } from '../Misc'

const Copyright = () => {
    const [ stars, setStars ] = useState(0)

    useEffect(() => {
        async function fetchData() {
          const { data } = await axios.get('https://api.github.com/repos/oliviasztanga/personal-site-v2')
          const { stargazers_count } = data
          setStars(stargazers_count)
        }

        try {
            fetchData()
        } catch (error) {
            // welp! no stars i guess :3
        }
    }, [])

    return (
        <div className={styles.copyright}>
            <p className="acc--12 mb--xxs">Designed by Olivia Sztanga © 2020</p>
            <p className="acc--12">
                <a className="link" href={`${github}/personal-site-v2`} target="_blank" rel="noopener noreferrer">
                    <SVG extension="#icon-star" classname={styles.star} />
                    { stars 
                        ? stars
                        : 'Aw shucks! No stars yet :c'
                    }
                </a>
            </p>
        </div>
    )
}

export default Copyright