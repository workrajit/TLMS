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
        <main className="pt-[50px] h-full">{children}</main>
      </div>
    </>
  );
}
