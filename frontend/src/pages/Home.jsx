import React from 'react'
import Hero from '../components/hero.jsx'
import FeaturedBooks from '../components/FeaturedBooks.jsx'
import NewArrivals from '../components/NewArrival.jsx'
import POPULARBOOKS from '../components/PopularBooks.jsx'

const Home = () => {
    return (
        <div>
            <Hero />

            <FeaturedBooks />
            <NewArrivals />
            <POPULARBOOKS />

        </div>
    )
}

export default Home
