import React from 'react'
import Slider from '../components/Slider'
import WinterCareTips from '../components/Care/WinterCareTips'
import ExpertVets from '../components/Expert/ExpertVets'
import Pets from '../components/PetsServices/PetsServices'
import Testimonial from '../components/testimonial/Testimonial'

const Home = () => {
  return (
    <div>
     <Slider></Slider>
     <Pets></Pets>
     <WinterCareTips></WinterCareTips>
     <ExpertVets></ExpertVets>
     <Testimonial></Testimonial>
    </div>
  )
}

export default Home