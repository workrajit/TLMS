import { DashNavbar } from "./_components/dashNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="h-full">
        <div className="h-[80px] fixed inset-y-0 w-full z-50">
          <DashNavbar />
        </div>
        <main className="md:pl-[80px] pt-[80px] h-full">{children}</main>
      </div>
    </>
  );
}
