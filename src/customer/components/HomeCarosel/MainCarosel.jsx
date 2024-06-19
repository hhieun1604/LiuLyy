import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';




const MainCarosel = () => {

  const items = mainCarouselData.map((item)=> <img className='cursor-poniter'
  role='presentation' src={item.image} alt="" />)
  
  return(
     
        // mouseTracking
        items={items}
        // controlsStrategy="alternate"
     
  )
};

export default MainCarosel