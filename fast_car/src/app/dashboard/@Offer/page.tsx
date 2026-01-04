"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    image: "/car/camry.JPG",
    offer: "Save $5000 on selected model",
  },
  {
    id: 2,
    name: "BMW X5",
    image: "/car/bmw.JPG",
    offer: "0% Financing for 12 months",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-16  max-w-6xl mx-auto ">
      {/* Top Card with Nested Car Cards */}
      <Card className="bg-black/90 text-white relative overflow-hidden rounded-4xl shadow-lg">
        {/* Header */}
        <CardHeader className="flex justify-between items-start p-8">
          <div className="text-2xl font-bold">
            Special
            <span className="text-yellow-500 px-2">Offer</span>
          </div>
          <div className="hidden lg:block">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
              Drive Your Dream Car Today
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Limited-time deals on our most popular models. Don't miss out!
            </p>
          </div>

          <Button
            variant="outline"
            className="text-white px-8 border-green-500  bg-green-500 hover:text-black "
          >
            View
          </Button>
        </CardHeader>

        <CardContent className="p-6 px-12 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cars.map((car) => (
              <Card
                key={car.id}
                className="relative h-72 overflow-hidden rounded-3xl cursor-pointer
             border-none bg-transparent shadow-none"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Card Content */}
                <CardContent className="relative z-10 h-full p-6 text-gray-200">
                  <div
                    className="absolute flex flex-col items-center gap-2
                  top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <h3 className="text-xl font-bold">{car.name}</h3>

                    <p className="text-center text-lg font-semibold">
                      {car.offer}
                    </p>

                    <Button className="bg-green-500 px-8 py-5 hover:bg-green-400 rounded-2xl text-white">
                      Check Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
