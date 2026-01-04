export default function DashboardLayout({
  children,
  Hero,
  PopularCar,
  Offer,
  Top,
}: {
  children: React.ReactNode;
  Hero: React.ReactNode;
  PopularCar: React.ReactNode;
  Offer: React.ReactNode;
  Top: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
        <div>{Hero}</div>
        <div>{PopularCar}</div>
        <div>{Offer}</div>
        <div>{Top}</div>
    </>
  );
}
