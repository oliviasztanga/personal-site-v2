import React from 'react'

import { featuredProjects } from '../../assets/content/projects'

import Section from '../Section'
import ProjectCard from './ProjectCard'

const Projects = () => {

    return (
        <Section number={'03'} title="Projects" >
            
            {featuredProjects.map(({ title, github, language, description }) => <ProjectCard
                key={title} 
                title={title}
                github={github}
                language={language}
                description={description}
            />)}

        </Section>
    )
}

export default Projects