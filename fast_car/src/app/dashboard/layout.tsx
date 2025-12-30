export default function DashboardLayout({
  children,
  Hero
}: {
  children: React.ReactNode;
  Hero: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
        <div>{Hero}</div>
    </>
  );
}
