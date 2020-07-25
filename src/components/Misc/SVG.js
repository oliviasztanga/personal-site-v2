import React from 'react'
import sprites from '../../assets/images/sprites.svg'

const SVG = ({ extension, classname }) => {
    return (
        <svg className={classname ? classname : {}}>
            <use xlinkHref={sprites + extension}></use>
        </svg>
    )
}

export default SVG