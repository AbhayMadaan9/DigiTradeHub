import React from 'react'
import BlogGrid from '../components/blogComp/BlogGrid'
import GumroadFounder from '../components/blogComp/GumroadFounder'
import LatestNews from '../components/blogComp/LatestNews'
import Footer from '../components/generalComp/Footer'
import Navbar from '../components/generalComp/Navbar'
import ShareWork from '../components/generalComp/ShareWork'

const Blog = () => {
  return (
    <>
        <Navbar/>
        <LatestNews/>
        <GumroadFounder/>
        <BlogGrid/>
        <ShareWork/>
        <Footer/>
    </>
  )
}

export default Blog