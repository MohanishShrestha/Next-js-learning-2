export default function DashboardLayout({
  children,
  Hero,
  PopularCar,
  Offer,
  Top,
  Choose,
  Carsole,
}: {
  children: React.ReactNode;
  Hero: React.ReactNode;
  PopularCar: React.ReactNode;
  Offer: React.ReactNode;
  Top: React.ReactNode;
  Choose: React.ReactNode;
  Carsole: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
        <div>{Hero}</div>
        <div>{PopularCar}</div>
        <div>{Offer}</div>
        <div>{Top}</div>
        <div>{Choose}</div>
        <div>{Carsole}</div>
    </>
  );
}
