import Gallery from '@/components/gallery/Gallery'
import Header from '@/components/gallery/Header'
import Footer from '@/components/home/Footer'
import Navbar from '@/components/home/Navbar'
import React from 'react'


const page = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Header/>
        <Gallery/>
        <Footer/>
    </div>
    </>
  )
}

export default page