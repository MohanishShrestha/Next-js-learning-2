"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { DollarSign, Settings, CreditCard, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Best Pricing",
    description: "Competitive prices with no hidden costs",
  },
  {
    icon: Settings,
    title: "Easy Customization",
    description: "Choose features that fit your needs",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "EMI & financing options available check our schemes",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    description: "Verified dealers & secure transactions",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      {/* TOP CONTENT */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Why <span className="text-green-600">Choose</span> Us
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We make buying your dream car simple, secure, and affordable with
          industry-leading features and trusted partners.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12">
        {/* LEFT FEATURES */}
        <div className="space-y-8 mr-4">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* CENTER IMAGE */}
        {/* <div className="relative h-87.5 w-full">
          <Image
            src="/car/cart-2.png"
            alt="Car"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority
          />
        </div> */}
        {/* CENTER IMAGE */}
        <div className="relative w-full flex justify-center ">
          <div className="relative h-105 w-full max-w-xl lg:max-w-2xl">
            <Image
              src="/car/cart-2.png"
              alt="Car"
              fill
              className="object-contain scale-130"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="space-y-8 ml-4 ">
          {features.slice(2).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* FEATURE CARD COMPONENT */
function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex items-start gap-4 p-5 bg-gray-100  border-none shadow-none">
      <div className="bg-green-100 text-green-600 p-3 rounded-xl">
        <Icon size={24} />
      </div>

      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </Card>
  );
}
