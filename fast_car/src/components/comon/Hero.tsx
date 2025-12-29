import Image from "next/image";
import HomeSlider from "./HomeSlider";

export default function Hero() {
  return (
    <section className="bg-orange-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Car</h1>
          <p className="text-gray-700 mb-6">
            Compare prices, specs, and features of new & used cars.
          </p>

          <input
            type="text"
            placeholder="Search cars, brands..."
            className="w-full p-3 rounded border focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Right slider */}
        <HomeSlider />
      </div>
    </section>
  );
}
