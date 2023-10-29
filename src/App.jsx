import React from 'react'
import { Navbar, Hero, Sales, FlexContent, Stories, Footer } from './componenets'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data'

export default function App() {
  return (
    <>
       <Navbar />
       <main className='flex flex-col gap-16 relative'>
          <Hero heroapi={heroapi}/>
          <Sales endpoint={popularsales} ifExists/>
          <FlexContent endpoint={highlight} ifExists/>
          <Sales endpoint={toprateslaes}/>
          <FlexContent endpoint={sneaker}/>
          <Stories story={story}/>
       </main>
       <Footer footerAPI={footerAPI}/>
    </>
  )
}



