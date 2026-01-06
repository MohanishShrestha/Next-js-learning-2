"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  isFeatured?: boolean;
}

const cars: Car[] = [
  { id: 1, name: "Tesla Model 3", price: "$55,000", image: "/car/cart-1.png" },
  { id: 2, name: "BMW X5", price: "$60,000", image: "/car/cart-2.png" },
  { id: 3, name: "Toyota Camry", price: "$30,000", image: "/car/cart-3.png" },
  { id: 4, name: "Ford F-150", price: "$50,000", image: "/car/cart-4.png" },
  { id: 5, name: "BMW X5", price: "$60,000", image: "/car/cart-2.png" },
  { id: 6, name: "Toyota Camry", price: "$30,000", image: "/car/cart-3.png" },
  { id: 7, name: "Ford F-150", price: "$50,000", image: "/car/cart-4.png" },
  { id: 8, name: "Tesla Model 3", price: "$55,000", image: "/car/cart-1.png" },

  { id: 9, name: "Ford F-150", price: "$50,000", image: "/car/cart-4.png" },
];

export default function PopularCars() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(activeCard === id ? null : id); // toggle active card
  };

  return (
    <section className="py-16 gap-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Our <span className="text-green-600">Popular</span> Cars
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Check out some of the most popular cars our customers love, known for
          their performance, style, and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => {
          const isActive = activeCard === car.id;

          return (
            <div
              key={car.id}
              onClick={() => handleCardClick(car.id)}
              className={`relative rounded-3xl overflow-hidden mt-2 cursor-pointer transition-all duration-800 shadow-lg 
                ${
                  isActive
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-slate-900"
                }
              `}
            >
              {/* Card Content */}
              <div className="relative flex flex-col h-64 items-center justify-between p-6">
                {/* Name & Price */}
                <div
                  className={`transition-all duration-500 w-full text-center ${
                    isActive ? "order-1" : "order-2 mt-auto"
                  }`}
                >
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <p
                    className={
                      isActive ? "text-emerald-100" : "text-muted-foreground"
                    }
                  >
                    Price: {car.price}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`relative w-full h-32 transition-all duration-500 ${
                    isActive ? "order-2 my-2 h-40" : "order-1 mb-4"
                  }`}
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Shop Now Button */}
                {isActive && (
                  <Link href={`/dashboard/cars/${car.id}`} className="w-full order-3">
                    <Button className="w-full bg-white text-green-600 hover:bg-gray-100 rounded-full font-bold order-3 mt-2">
                      Shop Now
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
