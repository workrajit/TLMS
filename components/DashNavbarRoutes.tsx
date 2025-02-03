"use client";
import { UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";

// import Link from "next/link";
import { NavBarItems } from "@/app/(landing page)/_components/navBarItems";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";

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
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-600" />
        </Button>
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </>
  );
};
