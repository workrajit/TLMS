"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface NavBarItemsProps {
  label: string;
  href: string;
}

export const NavBarItems = ({ label, href }: NavBarItemsProps) => {
  //   const pathname = usePathname();
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={cn(
          `flex items-center gap-x-2 text-slate-500 text-sm font-[400] pl-6 transition-all`
        )}
      >
        <div className="flex items-center gap-x-2 py-4">{label}</div>
        <div
          className={cn(
            " ml-auto opacity-0 border-2 rounded-md border-sky-700 h-full transition-all"
          )}
        />
      </button>
    </>
  );
};
