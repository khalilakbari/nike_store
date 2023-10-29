import React from 'react'
import { Hero, Sales } from './componenets'
import { heroapi, popularsales, toprateslaes } from './data/data'

export default function App() {
  return (
    <>
       <main className='flex flex-col gap-16 relative'>
          <Hero heroapi={heroapi}/>
          <Sales endpoint={popularsales} ifExists/>
          <Sales endpoint={toprateslaes}/>
       </main>
    </>
  )
}



