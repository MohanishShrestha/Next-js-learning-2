"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

const cards = [
  {
    id: 1,
    name: "Tesla Model 3",
    image: "/car/cart-1.png",
    type: "car",
  },
  {
    id: 2,
    name: "BMW X5",
    image: "/car/cart-2.png",
    type: "car",
  },
  {
    id: 3,
    name: "Toyota Camry",
    image: "/car/cart-3.png",
    type: "car",
  },
  {
    id: 4,
    name: "Browse All",
    type: "browse",
  },
];

export default function CarBrowseCards() {
  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <div className="hidden lg:block mb-8 text-center">
        <div className="text-2xl text-gray-600">
          <span className="text-yellow-500 px-2 text-3xl font-bold">
            TOP RATED
          </span>
          cars by types
        </div>

        <h2 className="text-xl sm:text-2xl text-gray-300 mb-2 text-center">
          Discover the highest rated cars chosen by our customers
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) =>
          card.type === "car" ? (
            /* CAR CARD */
            <Card
              key={card.id}
              className="relative h-96 rounded-3xl overflow-hidden
                         border-none bg-transparent shadow-none group"
            >
              {/* Image */}
              {/* Image Wrapper */}
              <div className="absolute inset-0">
                <Image
                  src={card.image!}
                  alt={card.name}
                  fill
                  className="
      object-contain
      scale-90
      transition-transform duration-300
      group-hover:scale-95
    "
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  priority={card.id === 1}
                />

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <h3 className="text-lg font-semibold">{card.name}</h3>

                <Button
                  size="icon"
                  className="rounded-full bg-green-600 text-white hover:bg-gray-200"
                >
                  <ArrowUpRight size={18} />
                </Button>
              </div>
            </Card>
          ) : (
            /* BROWSE ALL CARD */
            <Card
              key={card.id}
              className="h-96 rounded-3xl flex flex-col items-center
                         justify-center bg-green-600 text-white
                         border-none shadow-none group cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-4">Browse All</h3>

              <Button
                size="icon"
                className="rounded-full bg-white text-green-600
                           hover:bg-gray-100"
              >
                <ArrowDownRight size={20} />
              </Button>
            </Card>
          )
        )}
      </div>
    </section>
  );
}
