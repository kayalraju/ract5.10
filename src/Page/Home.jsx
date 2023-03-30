import React from 'react'
import HomeAbout from '../Component/Home/HomeAbout'
import HomeBanner from '../Component/Home/HomeBanner'
import HomeClient from '../Component/Home/HomeClient'
import HomePortfolio from '../Component/Home/HomePortfolio'
import HomeService from '../Component/Home/HomeService'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <main id="main">
                <HomeAbout />

                <HomeService />


                <HomePortfolio />


                <HomeClient />

            </main>
        </>
    )
}

export default Home
