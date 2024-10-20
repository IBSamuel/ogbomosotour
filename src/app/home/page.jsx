import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import Destinations from '@/components/home/Main/Destinations'
import Gridsystem from '@/components/home/Main/Gridsystem'
import Someparts from '@/components/home/Main/Someparts'
import Navbar from '@/components/home/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    {/* The Navabar Component from  the components folder is imported and used here */}
    <Navbar/>
    {/* The Header Componrnt from the components folder  is imported and used here */}
    <Header/>
    <Destinations/>
    <Gridsystem/>
    <Someparts/>
    <Footer/>

    </>
  )
}

export default page