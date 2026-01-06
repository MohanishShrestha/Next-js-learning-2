
import Image from "next/image";

interface Car {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
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

interface Props {
  params: {
    id: string;
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params; // ✅ unwrap params
   const carId = Number(id);

   const car = cars.find((c) => c.id === carId);

  if (!car) return <p className="text-center py-20">Car not found!</p>;

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Car Image */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={car.image}
            alt={car.name}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Car Details */}
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">{car.name}</h1>
          <p className="text-xl text-green-600 font-semibold">{car.price}</p>
          <p className="text-gray-500">{car.description}</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
