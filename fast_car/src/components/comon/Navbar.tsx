import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import CustomDropdown from "./CustomDropdown";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* FOR TOP NAV KO */}
      <div className="w-full flex items-center justify-between px-12 py-1 border-b">
        {/* Logo YETA */}
        <div className="flex items-center m-3 pl-8">
          <Image
            src="/fastcar.JPG"
            alt="FastCar"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>

        <div className=" flex justify-center gap-8 text-sm font-medium text-gray-800 ">
          <CustomDropdown
            label="NEW CARS"
            items={[
              "Upcoming",
              "Popular",
              "Electric",
              "New Cars",
              "Popular Brands",
            ]}
            className=" hover:text-orange-500 "
          />

          <CustomDropdown
            label="USED CARS"
            items={["Buy Used Car", "Used Electric cars", "Sell Used Car"]}
            className="hover:text-orange-500"
          />

          <CustomDropdown
            label="NEWS & REVIEWS"
            items={["Top News Of The Night", "User Review", "Tips & Advice"]}
            className="hover:text-orange-500"
          />

          <p className="flex items-center gap-1 text-lg">Contact</p>
        </div>

        <Button
          variant="default"
          className="flex items-center gap-1 bg-orange-600 text-white hover:bg-orange-700 h-10 px-4"
        >
          <User size={18} /> Sign In
        </Button>
      </div>
    </div>
  );
}
