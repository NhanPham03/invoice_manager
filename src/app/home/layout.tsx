import SideNav from "@/components/SideNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="h-full w-full">{children}</div>
    </div>
  );
}