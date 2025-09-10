import React from 'react'
import Hero from '../components/hero.jsx'
import Navbar from '../components/Navbar.jsx'
import {FeaturedBooks} from '../components/FeaturedBooks.jsx'
import Carousel from '../components/Crausel.jsx'
import AllBooks from '../components/AllBooks.jsx'
import Footer from '../components/Footer.jsx'
import TestimonialSlide from '../components/Testimonals.jsx'
import Testimonials from '../components/Testimonals.jsx'



const Home = () => {
    return (
        <div>
          
           {/* <Navbar/> */}
            {/* <Hero /> */}
            <Carousel />
   
            <FeaturedBooks />
            {/* <AllBooks /> */}
            <Testimonials/>
            <Footer/>

        </div>
    )
}

export default Home
