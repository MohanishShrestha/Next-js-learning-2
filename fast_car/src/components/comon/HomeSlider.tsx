"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";

const images = ["/car/car1.jpg", "/car/car2.jpg", "/car/car3.jpg"];

export default function HomeSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen mx-auto">
      <div className="overflow-hidden w-full">
        <Image
          src={images[current]}
          alt="Car banner"
          width={1200}
          height={500}
          className="w-full h-screen object-cover transition-all duration-500"
        />

        <Button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow"
        >
          ◀
        </Button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 px-3 py-2 rounded-full shadow"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
