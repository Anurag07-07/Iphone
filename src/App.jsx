import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Models from './components/Models'

import * as Sentry from '@sentry/react'
import Feature from './components/Feature'
import HowItWorks from './components/HowItWorks'

const App = () => {

  return (
    <main className=' bg-black'>
      <Navbar></Navbar>
      <Hero></Hero>
      <Highlights></Highlights>
      <Models></Models>
      <Feature></Feature>
      <HowItWorks></HowItWorks>
    </main>
  )
}

export default Sentry.withProfiler(App)