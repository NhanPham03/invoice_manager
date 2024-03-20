import InvoiceForm from "@/components/forms/InvoiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice"
};

export default function CreateInvoice() {
  return (
    <main className="flex flex-col gap-2 md:h-screen">
      <h3 className="font-bold text-3xl my-4 text-center">Create Invoice</h3>
      
      <div className="max-w-screen-lg mx-auto">
        <InvoiceForm action="Create" />
      </div>
    </main>
  );
}