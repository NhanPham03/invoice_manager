import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Link from "next/link";

export default function Home({
  searchParams
}: {
  searchParams: {
    show?: string,
  }
}) {  
  const show = searchParams?.show;

  return (
    <main className="flex flex-col gap-4 items-center justify-center md:h-screen">
      <h3 className="font-bold text-3xl">Invoice Management System</h3>
      <div className="flex flex-row gap-1">
        <p className="font-mono font-bold text-lime-300">NotFound404</p> |
        <h1 className="font-serif text-red-300">"To err is to be dev"</h1>
        <p>(
          <Link className="text-blue-500 underline hover:text-blue-300"
            href={"https://github.com/NhanPham03/invoice_manager"}
          >
            GitHub
          </Link>
          )
        </p>
      </div>
      
      {show === "login" && <LoginModal />}
      {show === "register" && <RegisterModal />}
    </main>
  );
}
