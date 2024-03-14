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
      <h1 className="font-bold">Invoice Management System</h1>
      <Link href={"/?show=login"}>Login</Link>
      <Link href={"/?show=signup"}>Register</Link>

      {show === "login" && <LoginModal />}
      {show === "signup" && <RegisterModal />}
    </main>
  );
}
