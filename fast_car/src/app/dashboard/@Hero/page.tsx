"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const images = ["/car/car1.jpg", "/car/car2.jpg", "/car/car3.jpg"];
const imagecar = ["/newCar.png", "/car/car2.jpg", "/car/car3.jpg"];

const categories = [
  { name: "Shop New", icon: "🚗", color: "bg-blue-50" },
  { name: "Shop Used", icon: "🏎️", color: "bg-yellow-50" },
  { name: "Electric", icon: "⚡", color: "bg-emerald-50" },
];

export default function Hero() {
  const [current] = useState(0);

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative w-full h-[85vh]">
        {/* Background Image */}
        <Image
          src={images[current]}
          alt="Car banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-green-500 text-3xl md:text-5xl font-bold mb-4">
            Find Your Perfect Car
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-6">
            Compare prices, specs & reviews in one place
          </p>

          {/* Search Bar */}
          <div className="relative w-full max-w-xl">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700"
              size={25}
            />

            <input
              type="text"
              placeholder="Search by brand, model, or budget..."
              className="w-full pl-12 pr-28 py-4 rounded-full text-green-600 bg-white/30 focus:bg-white/80 focus:outline-none"
            />

            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <div className="relative mt-10  px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className={`cursor-pointer hover:shadow-lg transition ${category.color}`}
            >
              <CardContent className="flex flex-col items-center justify-center py-8">
                
                <span className="text-4xl mb-3">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
