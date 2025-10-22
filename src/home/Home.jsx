import React from 'react'
import Slider from '../components/Slider'
import WinterCareTips from '../components/Care/WinterCareTips'
import ExpertVets from '../components/Expert/ExpertVets'
import Pets from '../components/PetsServices/PetsServices'

const Home = () => {
  return (
    <div>
     <Slider></Slider>
     <Pets></Pets>
     <WinterCareTips></WinterCareTips>
     <ExpertVets></ExpertVets>
    </div>
  )
}

export default Home