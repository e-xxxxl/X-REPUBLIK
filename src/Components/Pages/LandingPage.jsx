import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Marquee from '../Marquee/Marquee'
import HeroSection from '../Hero/Herosection'
import YellowMarquee from '../Marquee/YellowMarquee'
import Secondhero from '../Hero/Secondhero'
import FAQ from '../Hero/FAQ'
import SideScroll from '../Marquee/SideScroll'
import WhiteMarquee from '../Marquee/WhiteMarquee'
import Footer from '../Footer/Footer'


const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <Header/>
         <Marquee/>
         <HeroSection/>
         <YellowMarquee/>
         <Secondhero/>
         <WhiteMarquee/>
         <FAQ/>
         <Footer/>
    </>
  )
}

export default LandingPage