import React from 'react'
import Navbar from '../Navbar/Navbar'
import LineupHeader from '../Header/LineupHeader'
import Marquee from '../Marquee/Marquee'
import LineupHero from '../Hero/LineupHero'
import YellowMarquee from '../Marquee/YellowMarquee'
import SecondLineupHero from '../Hero/SecondLineupHero'
import WhiteMarquee from '../Marquee/WhiteMarquee'
import Footer from '../Footer/Footer'

const LineupPage = () => {
  return (
    <>
        <Navbar/>
        <LineupHeader/>
        <Marquee/>
        <LineupHero/>
        <YellowMarquee/>
        <SecondLineupHero/>
        <WhiteMarquee/>
        <Footer/>
    </>
  )
}

export default LineupPage