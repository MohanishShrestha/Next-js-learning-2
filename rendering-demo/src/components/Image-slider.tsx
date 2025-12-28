"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
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
    </div>
  );
}
