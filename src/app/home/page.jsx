import Header from '@/components/home/Header'
import Navbar from '@/components/home/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    {/* The Navabar Component from  the components folder is imported and used here */}
    <Navbar/>
    <Header/>
    </>
  )
}

export default page