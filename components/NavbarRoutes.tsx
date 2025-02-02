"use client";
import { UserButton, useUser } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import { NavBarItems } from "@/app/(landing page)/_components/navBarItems";

const navRoutes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
export const NavbarRoutes = () => {
  //   const pathname = usePathname();
  const { isSignedIn } = useUser();

  return (
    <>
      <div className="flex flex-row w-full">
        {navRoutes.map((route) => (
          <NavBarItems key={route.href} label={route.label} href={route.href} />
        ))}
      </div>
      <div>
        <UserButton afterSwitchSessionUrl="/" />
      </div>
      {!isSignedIn && (
        <div className="flex flex-row space-x-4">
          <Button onClick={() => (window.location.href = "/sign-in")}>
            Sign In
          </Button>
          <Button onClick={() => (window.location.href = "/sign-up")}>
            Sign Up
          </Button>
        </div>
      )}
    </>
  );
};
