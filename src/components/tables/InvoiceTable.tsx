import { fetchInvoiceByQuery } from "@/lib/data";
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { DeleteInvoiceButton, EditInvoiceButton } from "../buttons/InvoiceButtons";

const tempData = [
  { id: "1", name: "Adam Smith", amount: 100, status: 'pending' },
  { id: "2", name: "Mary Anne", amount: 150, status: 'paid' },
  { id: "3", name: "Samantha Parker", amount: 203, status: 'pending' },
  { id: "4", name: "Marcus Johnson", amount: 76, status: 'pending' },
  { id: "5", name: "Emily Carter", amount: 120, status: 'pending' },
  { id: "6", name: "Joshua Bennett", amount: 30, status: 'paid' }
];

export default async function InvoiceTable({
  query
}: {
  query: string
}) {
  const invoices = await fetchInvoiceByQuery(query);

  return (
    <table className="hidden rounded-md bg-slate-800 md:table">
      <thead>
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Name
          </th>
          <th scope="col" className="px-4 py-5 font-medium">
            Amount
          </th>
          <th scope="col" className="px-4 py-5 font-medium">
            Status
          </th>
          <th scope="col" className="px-4 py-5 font-medium"></th>
        </tr>
      </thead>
      <tbody>
      {tempData.map((temp) => {
        return (
          <tr className="w-full border-b py-3 text-sm bg-slate-700 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            key={temp.id}
          >
            <td className="whitespace-nowrap px-10 py-3">
              <p>{temp.name}</p>
            </td>
            <td className="whitespace-nowrap px-7 py-3 text-center">
              <p>${temp.amount}</p>
            </td>
            <td className="whitespace-nowrap px-7 py-3">
              <p className={clsx("flex justify-center",
                {
                  "text-white": temp.status === "pending",
                  "text-green-600": temp.status === "paid",
                },
              )}
              >
                {temp.status === "pending" ? (
                  <>
                    Pending
                    <ClockIcon className="ml-1 w-4 text-white" />
                  </>
                ) : null}
                {temp.status === "paid" ? (
                  <>
                    Paid
                    <CheckIcon className="ml-1 w-4 text-green-600" />
                  </>
                ) : null}
              </p>
            </td>
            <td className="flex flex-row gap-2 whitespace-nowrap px-7 py-3 float-end">
              <EditInvoiceButton id={temp.id} />
              <DeleteInvoiceButton id={temp.id} />
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}