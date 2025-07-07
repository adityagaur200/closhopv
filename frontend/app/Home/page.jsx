import React from 'react'
import NavBar from './NavBar'
import Carousel from './Carousel'
import CardCarousel from './CardCarousel'
import Banner from './Banner'

const page = () => {
 
  return (
    <div>
      <NavBar/>
      <Carousel/>
      <CardCarousel/>
      <Carousel/>
      <CardCarousel/>
      <Banner/>
    </div>
  )
}

export default page
