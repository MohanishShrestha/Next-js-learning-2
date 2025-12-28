"use client";
import React, { use } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "@/components/Theme-provider";

export default function ClientRoutePage() {
  const theme = useTheme();
  const settings = {
    dots: true,
  };
  return (
    <>
      {/* <div className="image-slider-container">
        <Slider {...settings}>
          <div className="slide">
            <img src="./loading.JPG" alt="loading" />
          </div>
          <div className="slide">
            <img src="./update.JPG" alt="update" />
          </div>
          <div className="slide">
            <img src="./loading.JPG" alt="loading" />
          </div>
          <div className="slide">
            <img src="./update.JPG" alt="update" />
          </div>
        </Slider>
      </div> */}
      <h1 style={{color: theme.colors.secondary}}>CLient page</h1>
    </>
  );
}
