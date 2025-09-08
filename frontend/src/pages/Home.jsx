import React from 'react'
import Hero from '../components/hero.jsx'
import Navbar from '../components/Navbar.jsx'
import {FeaturedBooks} from '../components/FeaturedBooks.jsx'


const Home = () => {
    return (
        <div>
          
           <Navbar/>
            <Hero />
            <FeaturedBooks/>

        </div>
    )
}

export default Home
