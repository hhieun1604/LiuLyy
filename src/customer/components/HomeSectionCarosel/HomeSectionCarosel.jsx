import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

const HomeSectionCarosel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
  return (
    <div>
        <AliceCarousel
        // mouseTracking
        items={items}
        // controlsStrategy="alternate"
        disableButtonsControls
        autoHeight
        // autoPlay
        // autoPlayStrategy='1000'
        infinite
        responsive={responsive}
        
     />   
    </div>
  )
}

export default HomeSectionCarosel