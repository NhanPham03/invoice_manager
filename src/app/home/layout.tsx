import SideNav from "@/components/sidenav/SideNav";

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen md:overflow-hidden">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="h-full w-full m-4 md:my-4">{children}</div>
    </div>
  );
}