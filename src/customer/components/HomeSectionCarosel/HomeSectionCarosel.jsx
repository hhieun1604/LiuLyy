import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarosel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = mens_kurta.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));
  return (
    <div className="border ">
      <div className="relative p-5">
        <AliceCarousel
         ref={carouselRef}
         items={items}
         disableButtonsControls
         responsive={responsive}
         disableDotsControls
         onSlideChanged={syncActiveIndex}
         activeIndex={activeIndex}
        />
        { activeIndex !==items.length-5 &&   <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <ArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
          </Button>
        }
        <Button
          variant="contained"
          className="z-50 bg-white"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <ArrowRightIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
