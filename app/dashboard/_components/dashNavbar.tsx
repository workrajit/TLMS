import { DashNavbarRoutes } from "@/components/DashNavbarRoutes";
// import { MobileSideBar } from "./mobileSidebar";
import { Logo } from "./Logo";

export const DashNavbar = () => {
  return (
    <>
      <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
        {/* <MobileSideBar /> */}
        <div className="p-6">
          <Logo />
        </div>
        <DashNavbarRoutes />
      </div>
    </>
  );
};
