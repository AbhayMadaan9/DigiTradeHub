import React from 'react'
import Footer from '../components/generalComp/Footer'
import Navbar from '../components/generalComp/Navbar'
import ShareWork from '../components/generalComp/ShareWork'
import FAQ from '../components/pricingComp/FAQ'
import PricingIntro from '../components/pricingComp/PricingIntro'

const Pricing = () => {
  return (
    <>
        <Navbar/>
        <PricingIntro/>
        <FAQ/>
        <ShareWork/>
        <Footer/>
    </>
  )
}

export default Pricing