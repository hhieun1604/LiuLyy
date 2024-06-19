import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';




const MainCarosel = () => {

  const items = mainCarouselData.map((item)=> <img className='cursor-poniter'
  role='presentation' src={item.image} alt="" />)
  
  return(
        <AliceCarousel
        // mouseTracking
        items={items}
        // controlsStrategy="alternate"
        disableButtonsControls
        autoHeight
        autoPlay
        autoPlayStrategy='1000'
        infinite
        
     />
  )
};

export default MainCarosel