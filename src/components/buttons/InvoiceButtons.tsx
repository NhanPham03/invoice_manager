"use client";

import { deleteInvoice } from "@/lib/actions/data.action";
import { PencilIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function CreateInvoiceButton() {
  return (
    <Link className="flex h-9 items-center rounded-md px-4 text-sm font-medium text-white bg-green-600 hover:bg-green-500 ease-in duration-100"
      href={"/home/invoice/create"}
    >
      <span className="hidden md:block">
        Create Invoice
      </span>
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function EditInvoiceButton({ id }: {
  id: string
}) {
  return (
    <Link className="flex h-9 w-fit items-center rounded-md px-4 text-sm font-medium text-white bg-green-600 hover:bg-green-500 ease-in duration-100"
      href={`/home/invoice/${id}/edit`}
    >
      <PencilIcon className="h-5" />
    </Link>
  );
}

export function DeleteInvoiceButton({ id }: {
  id: string
}) {
  async function handleClick() {
    await deleteInvoice(id);
  }

  return (
    <button className="flex h-9 w-fit items-center rounded-md px-4 text-sm font-medium text-white bg-red-600 hover:bg-red-500 ease-in duration-100"
      onClick={handleClick}
    >
      <XMarkIcon className="h-5" />
    </button>
  );
}
