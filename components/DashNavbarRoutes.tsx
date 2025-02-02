"use client";
import { UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";

// import Link from "next/link";
import { NavBarItems } from "@/app/(landing page)/_components/navBarItems";

const dashNavRoutes = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Issues",
    href: "/dashboard/issues",
  },
  {
    label: "Payments",
    href: "/dashboard/payments",
  },
  {
    label: "Documents",
    href: "/dashboard/documents",
  },
];
export const DashNavbarRoutes = () => {
  //   const pathname = usePathname();

  return (
    <>
      <div className="flex flex-row w-full">
        {dashNavRoutes.map((route) => (
          <NavBarItems key={route.href} label={route.label} href={route.href} />
        ))}
      </div>
      <div>
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </>
  );
};
