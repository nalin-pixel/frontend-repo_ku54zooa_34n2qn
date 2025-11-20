import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Architecture from './components/Architecture'
import Benefits from './components/Benefits'
import UseCases from './components/UseCases'
import Developers from './components/Developers'
import Compliance from './components/Compliance'
import CaseStudies from './components/CaseStudies'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <HowItWorks />
      <Architecture />
      <Benefits />
      <CaseStudies />
      <UseCases />
      <Developers />
      <Compliance />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
