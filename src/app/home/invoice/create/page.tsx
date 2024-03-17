import BuyerForm from "@/components/forms/BuyerForm";
import ShippingForm from "@/components/forms/ShippingForm";

export default function CreateInvoice() {
  return (
    <main className="flex flex-col gap-2 md:h-screen">
      <h3 className="font-bold text-3xl my-4 text-center">Create Invoice</h3>

      <div className="mt-4 flex flex-row gap-2">
        <div className="p-4 w-1/2 rounded-md bg-gray-800">
          <h2 className="font-semibold">Customer Information</h2>
          <BuyerForm />
        </div>
        <div className="p-4 w-1/2 rounded-md bg-gray-800">
          <h2 className="font-semibold">Shipping Information</h2>
          <ShippingForm />
        </div>
      </div>

      <div className="p-4 rounded-md bg-gray-800">
        <h2 className="font-semibold">Product List</h2>

      </div>
    </main>
  );
}