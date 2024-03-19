import SearchBar from "@/components/SearchBar";
import { CreateInvoiceButton } from "@/components/buttons/InvoiceButtons";
import InvoiceTable from "@/components/tables/InvoiceTable";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Invoice",
};

export default function Invoice({ 
  searchParams 
}: {
  searchParams: {
    query?: string,
  }
}) {
  const query = searchParams?.query || '';

  return (
    <main className="flex flex-col gap-2 md:h-screen">
      <h3 className="font-bold text-3xl my-4 text-center">Invoices</h3>

      <div className="my-4 rounded-md bg-gray-800">
        <div className="flex flex-row gap-2 m-3 justify-between">
          <SearchBar placeholder="Search invoices" />
          <CreateInvoiceButton />
        </div>
      </div>

      <div className="rounded-md place-self-center">
        <Suspense>
          <InvoiceTable query={query} />
        </Suspense>
      </div>
    </main>
  );
}