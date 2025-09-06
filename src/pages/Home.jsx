import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Herosection'
import { FeaturedBooks } from '../components/Featuredbooks'
import QuoteGenerator from '../components/QuoteGenerator'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedBooks/>
        <QuoteGenerator/>
      
     
      
    </div>
  )
}

export default Home
