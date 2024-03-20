import InvoiceForm from "@/components/forms/InvoiceForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Invoice"
};

export default function EditInvoice({ params }: {
  params: {
    id: string
  }
}) {
  const id = params.id;

  return (
    <main className="flex flex-col gap-2 md:h-screen">
      <h3 className="font-bold text-3xl my-4 text-center">Edit Invoice</h3>

      <div className="max-w-screen-lg mx-auto">
        <InvoiceForm action="Edit" />
      </div>
    </main>
  );
}