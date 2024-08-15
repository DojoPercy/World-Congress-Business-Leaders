import React from 'react'
import Header from './_pages/Header'
import Hero from './_pages/Hero'
import About from './_pages/About'
import CongressComponents from './_pages/CongressComponents'
import CongressObjectives from './_pages/CongressObjectives'
import Agenda from './_pages/Agenda'

const Page = () => {
  return (
    <main className='  bg-white w-full flex flex-col'>
      <Header/>
      <Hero/>
      <About/>
      <CongressComponents/>
      <CongressObjectives/>
      <Agenda/>
    </main>
  )
}

export default Page
