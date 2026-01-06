"use client";
import React, { useEffect, useRef, useState, type JSX } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { categories, sampleCars } from "@/components/comon/Cardata";

export default function CarCarousel(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const onPrev = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: -Math.round(width * 0.8),
      behavior: "smooth",
    });
  };

  const onNext = () => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: Math.round(width * 0.8),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  }, [activeTab]);

  const cars = sampleCars[activeTab] ?? [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Card className="w-full shadow-lg border-none bg-gray-100">
        <CardHeader>
          <div className="text-center">
            <CardTitle className="text-3xl md:text-4xl text-green-500 font-extrabold tracking-tight ">
              Latest Cars
            </CardTitle>
            <p className="mt-2 text-sm md:text-base text-gray-500">
              Explore the newest models with exciting offers
            </p>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="relative">
            {/* Slider area */}
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-4"
                aria-label="car slider"
              >
                {cars.length === 0 ? (
                  <div className="text-gray-400 italic px-4 text-sm">
                    No cars available for this category yet.
                  </div>
                ) : (
                  cars.map((car, i) => (
                    <article
                      key={i}
                      className="min-w-65 md:min-w-75 snap-start bg-gray-100 rounded-lg shadow-sm border"
                    >
                      {/* image area */}
                      <div className="relative h-36 md:h-44 bg-gray-100 rounded-t-lg overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* card body */}
                      <div className="p-4 text-center">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                          {car.title}
                        </h3>

                        <p className="mt-1 text-base md:text-md  text-gray-600">
                          Price: {car.price}
                        </p>

                        <div className="mt-4">
                          <Button
                            variant="outline"
                            className="px-6 py-2 text-sm font-semibold text-white bg-green-500
                 hover:bg-green-600 border-green-500 hover:border-green-600
                 transition-colors duration-200"
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            {/* Prev / Next buttons */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 ">
              <Button
                variant="default"
                size="icon"
                className="p-2 bg-white/80 border text-black  hover:bg-white rounded-full"
                onClick={onNext}
                aria-label="Next cars"
              >
                <ChevronRight size={18} />
              </Button>
            </div>

            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              <Button
                variant="default"
                size="icon"
                className="p-2 bg-white/80 border text-black  hover:bg-white rounded-full"
                onClick={onPrev}
                aria-label="Previous cars"
              >
                <ChevronLeft size={18} />
              </Button>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              className="text-green-600 font-semibold text-sm md:text-base
                     flex items-center gap-2 mx-auto hover:underline"
            >
              View All Latest Cars →
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
