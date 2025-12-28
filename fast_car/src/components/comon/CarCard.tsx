import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Car = {
  name: string;
  price: string;
  fuel: string;
  transmission: string;
  image: string;
};

type CarCardProps = {
  car: Car;
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="overflow-hidden transition hover:shadow-lg w-80">
      <div className="w-40 h-24 ">
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover"
          priority
        />
      </div>

      <CardContent className="space-y-2 pt-4">
        <h2 className="text-lg font-semibold">{car.name}</h2>

        <p className="text-sm text-muted-foreground">
          ₹ {car.price} • {car.fuel}
        </p>

        <Badge variant="secondary">{car.transmission}</Badge>
      </CardContent>

      <CardFooter className="flex gap-2">
        {/* <Button className="w-full">View Details</Button> */}
        <Button variant="outline" className="">
          Compare
        </Button>
      </CardFooter>
    </Card>
  );
}
