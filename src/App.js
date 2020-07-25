import React from 'react'
import './assets/stylesheets/application.scss'

import Layout from './components/Layout'
import Headshot from './components/Headshot'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Copyright from './components/Copyright'

const App = () => {
  return (
    <>
      <Layout>
        <Headshot />
        <About />
        <Experience />
        <Projects />
        <Copyright />
      </Layout>
    </>
  )
}

export default App
