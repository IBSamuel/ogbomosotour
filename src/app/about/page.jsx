import Header from '@/components/about/Header'
import Culture from '@/components/about/main/Culture'
import Traditions from '@/components/about/main/Traditions'
import Footer from '@/components/home/Footer'
import Carousel from '@/components/home/Main/Carousel'
import Navbar from '@/components/home/Navbar'
import React from 'react'


const page = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Header/>
        <Traditions/>
        <Culture/>
        <Carousel/>
        <Footer/>
    </div>
    </>
  )
}

export default page