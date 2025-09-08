import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Herosection'
import { FeaturedBooks } from '../components/Featuredbooks'
import QuoteGenerator from '../components/QuoteGenerator'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturedBooks/>
        <QuoteGenerator/>
        <Footer/>
        
      
     
      
    </div>
  )
}

export default Home
