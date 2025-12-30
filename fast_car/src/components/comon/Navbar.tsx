"use client";

import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";
import CustomDropdown from "./CustomDropdown";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Nav */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 py-2 border-b">
        {/* Logo */}
        <Image
          src="/Fast.JPG"
          alt="FastCar"
          width={140}
          height={40}
          className="object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-800">
          <CustomDropdown
            label="NEW CARS"
            items={[
              "Upcoming",
              "Popular",
              "Electric",
              "New Cars",
              "Popular Brands",
            ]}
          />

          <CustomDropdown
            label="USED CARS"
            items={["Buy Used Car", "Used Electric cars", "Sell Used Car"]}
          />

          <CustomDropdown
            label="NEWS & REVIEWS"
            items={["Top News Of The Night", "User Review", "Tips & Advice"]}
          />

          <div className="flex items-center gap-1 text-lg bg-transparent hover:bg-gray-100 px-2 rounded focus:bg-transparent cursor-pointer">
            CONTACT
          </div>
        </div>

        {/* Desktop Sign In */}
        <div className="hidden lg:block">
          <Button className="flex items-center gap-1 bg-green-600 hover:bg-green-700">
            <User size={18} /> Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4">
          <CustomDropdown
            label="NEW CARS"
            items={[
              "Upcoming",
              "Popular",
              "Electric",
              "New Cars",
              "Popular Brands",
            ]}
          />

          <CustomDropdown
            label="USED CARS"
            items={["Buy Used Car", "Used Electric cars", "Sell Used Car"]}
          />

          <CustomDropdown
            label="NEWS & REVIEWS"
            items={["Top News Of The Night", "User Review", "Tips & Advice"]}
          />

          <p>CONTACT</p>

          <Button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
            <User size={18} /> Sign In
          </Button>
        </div>
      )}
    </div>
  );
}
