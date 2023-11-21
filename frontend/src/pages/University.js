import React from 'react'
// import styled from 'styled-components'
import Footer from '../components/generalComp/Footer'
import Navbar from '../components/generalComp/Navbar'
import ShareWork from '../components/generalComp/ShareWork'
import Advanced from '../components/universityComp/Advanced'
import Archive from '../components/universityComp/Archive'
import GrowTogether from '../components/universityComp/GrowTogether'
import Review from '../components/universityComp/Review'
import Starter from '../components/universityComp/Starter'
import Learn from '../components/universityComp/Learn'
import GumroadCreators from '../components/universityComp/GumroadCreators'
import HelpingPeople from '../components/universityComp/HelpingPeople'


const University = () => {
  return (
    <>
     <Navbar/>
     <Learn/>
     <GrowTogether/>
     <Starter/>
     <Review/>
     <HelpingPeople/>
     <Advanced/>
     <Archive/>
     <GumroadCreators/>
     <ShareWork/>
     <Footer/>
    </>
  )
}

export default University