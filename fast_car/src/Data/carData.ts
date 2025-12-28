export type Car = {
  name: string;
  price: string;
  fuel: string;
  transmission: string;
  image: string;
};

export const cars: Car[] = [
  {
    name: "Hyundai Creta",
    price: "11.5 Lakh",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/fastcar.JPG",
  },
  {
    name: "Kia Seltos",
    price: "12.3 Lakh",
    fuel: "Diesel",
    transmission: "Automatic",
    image: "/fastcar.JPG",
  },
  {
    name: "Tata Nexon",
    price: "8.1 Lakh",
    fuel: "Petrol",
    transmission: "Manual",
    image: "/fastcar.JPG",
  },
  {
    name: "MG ZS EV",
    price: "18.9 Lakh",
    fuel: "Electric",
    transmission: "Automatic",
    image: "/fastcar.JPG",
  },
];
