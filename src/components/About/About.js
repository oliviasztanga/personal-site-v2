import React from 'react'
import Section from '../Section'
import Skills from './Skills'

const About = () => {

    return (
        <Section number={'01'} title="About" >
            
            <p className="p--14 mb--sm">
                I’m a <span className="type--bold">former nonprofit programs coordinator turned software engineer</span>. While working in nonprofit and doing everything from coordinating teams to modeling outcomes for reports, I developed a love for using technology to find solutions and optimize workflows on our shoestring budget.
            </p>
            <p className="p--14 mb--sm">
                When I'm not in front of a computer, you can find me binging international television, longboarding by the beach, or solving puzzles with my third cup of coffee in hand.
            </p>
            <p className="p--14 mb--xs">
                Scroll through some technologies I've been working with lately:
            </p>

            <Skills />

        </Section>
    )
}

export default About