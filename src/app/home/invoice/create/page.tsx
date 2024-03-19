import InvoiceForm from "@/components/forms/InvoiceForm";

export default function CreateInvoice() {
  return (
    <main className="flex flex-col gap-2 md:h-screen">
      <h3 className="font-bold text-3xl my-4 text-center">Create Invoice</h3>

      <div className="items-center justify-center">
        <InvoiceForm />
      </div>
    </main>
  );
}