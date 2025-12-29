import Background from "@/components/comon/Background";
import CarCard from "@/components/comon/CarCard";
import Hero from "@/components/comon/Hero";
import HomeSlider from "@/components/comon/HomeSlider";
import { cars } from "@/Data/carData";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="w-full max-w-7xl mx-auto px-6 py-8">
        <h1 className="mb-6 text-2xl font-bold">Popular Cars</h1>

        <div className=" mx-auto grid grid-cols-6 gap-8 px-4 ">
          {cars.map((car, i) => (
            <div key={i} className="w-30">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div> */}
      {/* <HomeSlider /> */}
      {/* <Hero /> */}
      <Background />
    </>
  );
}
