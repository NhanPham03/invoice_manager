import SearchBar from "@/components/SearchBar";
import InvoiceTable from "@/components/tables/InvoiceTable";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Invoice",
};

export default function Invoice({ 
  searchParams 
}: {
  searchParams: {
    query?: string,
    page?: number,
  }
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="flex flex-col gap-2 md:h-screen">
      <h3 className="font-bold text-3xl my-4 text-center">Invoices</h3>

      <div className="my-4 rounded-md bg-gray-800">
        <div className="flex flex-row gap-2 m-3 justify-between">
          <SearchBar placeholder="Search invoices" />
          <Link className="flex h-9 items-center rounded-md px-4 text-sm font-medium text-white bg-green-600 hover:bg-green-500 ease-in duration-100"
            href={"/home/invoice/create"}
          >
            <span className="hidden md:block">
              Create Invoice
            </span>
            <PlusIcon className="h-5 md:ml-4" />
          </Link>
        </div>
      </div>

      <div className="rounded-md">
        <Suspense>
          <InvoiceTable query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </main>
  );
}