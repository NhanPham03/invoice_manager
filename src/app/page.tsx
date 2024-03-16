import Link from "next/link";

export default function Home() {  
  return (
    <main className="flex flex-col gap-4 items-center justify-center md:h-screen">
      <h1 className="font-bold">Invoice Management System</h1>
      <Link href={"/home"}>Start using app</Link>
    </main>
  );
}
