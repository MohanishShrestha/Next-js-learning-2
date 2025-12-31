export default function DashboardLayout({
  children,
  Hero,
  PopularCar,
  Offer,
}: {
  children: React.ReactNode;
  Hero: React.ReactNode;
  PopularCar: React.ReactNode;
  Offer: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
        <div>{Hero}</div>
        <div>{PopularCar}</div>
        <div>{Offer}</div>
    </>
  );
}
