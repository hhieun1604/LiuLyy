import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);
  return (
    <div className="border border-black">
      <div className="relative p-5">
        <AliceCarousel
          // mouseTracking
          items={items}
          // controlsStrategy="alternate"
          disableButtonsControls
          autoHeight
          // autoPlay
          autoPlayStrategy="1000"
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button
          variant="contained"
          className="z-50 bg-white"
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

        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(50%) rotate(90deg)",
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
