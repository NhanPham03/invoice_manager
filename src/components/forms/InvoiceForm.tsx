'use client';

import { createInvoice, editInvoice } from "@/lib/actions/data.action";
import { invoiceFormBody, invoiceFormBodyType } from "@/lib/schema/invoice.schema";

import { BanknotesIcon, BuildingOffice2Icon, CurrencyDollarIcon, PhoneIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

const inputNoIconStyle = "block w-full rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500";
const inputIconStyle = "peer block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
const iconStyle = "pointer-events-none absolute mt-3 left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600";

export default function InvoiceForm({ action }: {
  action: 'Create' | 'Edit',
}) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {register, handleSubmit, formState: { errors }, control, watch} = useForm<invoiceFormBodyType>({
    resolver: zodResolver(invoiceFormBody),
    defaultValues: {
      customer: {
        first_name: "",
        last_name: "",
        email: "",
        company: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        postal_code: "",
        country: "",
      },
      products: [
        {
          name: "",
          quantity: 1,
          price: 1,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "products",
  });

  function formatPrice(value: any) {
    return value.toFixed(2);
  }

  async function onSubmit(data: invoiceFormBodyType) {
    setIsLoading(true);

    try {
      const validatedData = invoiceFormBody.parse(data);

      if (action === "Create") {
        await createInvoice(validatedData);
      }
      else {
        await editInvoice(validatedData);
      }

      toast("Create success", {
        description: "You have created a new invoice!",
      });
    } catch (error: any) {
      toast("Create failed", {
        description: "Please check your login credentials.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-4 items-center justify-center">
          <div className="p-4 w-full shadow-lg rounded-md bg-slate-800">
            <h2 className="px-7 font-semibold text-3xl my-4 text-left">Buyer Information</h2>

            <div className="px-7 py-3">
              <div className="flex flex-row gap-2">
                {/* First Name */}
                <div className="flex-1">
                  <label htmlFor="first_name">First name:</label>
                  <input className={inputNoIconStyle}
                    type="text"
                    id="first_name"
                    {...register("customer.first_name")}
                    placeholder="John" 
                    required
                  />
                </div>
                
                {/* Last Name */}
                <div className="flex-1">
                  <label htmlFor="last_name">Last name:</label>
                  <input className={inputNoIconStyle}
                    type="text"
                    id="last_name"
                    {...register("customer.last_name")}
                    placeholder="Doe" 
                    required
                  />
                </div>
                
              </div>

              <div className="flex flex-row gap-2 mt-4">
                {/* Email */}
                <div className="flex-1">
                  <label htmlFor="email">Email:</label>
                  <input className={inputNoIconStyle}
                    type="email"
                    id="email"
                    placeholder="any@mail.com" 
                    {...register("customer.email")}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex-1 relative">
                  <label htmlFor="phone" className="hidden lg:block">Phone number:</label>
                  <label htmlFor="phone" className="lg:hidden">Phone:</label>
                  <input className={inputIconStyle}
                    type="text"
                    id="phone"
                    placeholder="123456789" 
                    {...register("customer.phone")}
                    required
                  />
                  <PhoneIcon className={iconStyle} />
                </div>

                {/* Company */}
                <div className="flex-1 relative">
                  <label htmlFor="company">Company:</label>
                  <input className={inputIconStyle}
                    type="text"
                    id="company"
                    placeholder="Big Corp Ltd." 
                    {...register("customer.company")}
                  />
                  <BuildingOffice2Icon className={iconStyle} />
                </div>
              </div>
              
              {/* Address */}
              <div className="mt-4">
                <label htmlFor="address">Address:</label>
                <input className={inputNoIconStyle}
                  type="text"
                  id="address"
                  placeholder="123 Ave." 
                  {...register("customer.address")}
                />
              </div>

              <div className="flex flex-row gap-2 mt-4">
                {/* Province */}
                <div className="flex-auto">
                  <label htmlFor="province">Province:</label>
                  <input className={inputNoIconStyle}
                    type="text"
                    id="province"
                    placeholder="Anytown" 
                    {...register("customer.province")}
                  />
                </div>

                {/* Postal Code */}
                <div className="flex-1">
                  <label htmlFor="postal_code" className="hidden lg:block">Postal code:</label>
                  <label htmlFor="postal_code" className="lg:hidden">Postal:</label>
                  <input className={inputNoIconStyle}
                    type="text"
                    id="postal_code"
                    placeholder="100000" 
                    {...register("customer.postal_code")}
                  />
                </div>

                {/* Country */}
                <div className="flex-none">
                  <label htmlFor="country">Country:</label>
                  <input className={inputNoIconStyle}
                    type="text"
                    id="country"
                    placeholder="USA" 
                    {...register("customer.country")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 mt-2 w-full shadow-lg rounded-md bg-slate-800">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <h2 className="px-7 font-semibold text-3xl my-4 text-left">Products List</h2>

              {/* Add item */}
              <div className="px-7 my-4">
                <button className="flex h-9 items-center rounded-md px-4 text-sm font-medium text-white bg-green-600 hover:bg-green-500 ease-in duration-100"
                  type="button"
                  onClick={() => append({ name: "", quantity: 1, price: 1 })}
                >
                  <PlusIcon className="h-5 md:mr-4" />
                  <span className="hidden md:block">
                    Add item
                  </span>
                </button>
              </div>
            </div>
            
            <div className="px-7 pb-3">
              {fields.map((field, index) => (
                <div className="flex flex-row gap-2 mt-4"
                  key={field.id}
                >
                  {/* Name */}
                  <div className="flex-auto relative">
                    <label htmlFor={`item_${index}_name`}>Item #{index+1}:</label>
                    <input className={inputNoIconStyle}
                      type="text"
                      id={`item_${index}_name`}
                      placeholder="Name" 
                      {...register(`products.${index}.name`)}
                      required
                    />
                  </div>

                  {/* Quantity */}
                  <div className="flex-1">
                    <label htmlFor={`item_${index}_quantity`}>Quantity:</label>
                    <input className={inputNoIconStyle}
                      type="number"
                      id={`item_${index}_quantity`}
                      placeholder="0"
                      defaultValue={watch(`products.${index}.quantity`)}
                      step={1}
                      min={0}
                      {...register(`products.${index}.quantity`)}
                      required
                    />
                  </div>

                  {/* Price */}
                  <div className="relative flex-1">
                    <label htmlFor={`item_${index}_price`}>Price:</label>
                    <input className={inputIconStyle}
                      type="number"
                      id={`item_${index}_price`}
                      placeholder="0"
                      defaultValue={watch(`products.${index}.price`)}
                      step={1}
                      min={0}
                      {...register(`products.${index}.price`)}
                      required
                    />
                    <CurrencyDollarIcon className={iconStyle} />
                  </div>

                  {/* Subtotal */}
                  <div className="relative flex-1">
                    <label htmlFor={`item_${index}_subtotal`}>Subtotal:</label>
                    <input className={inputIconStyle}
                      type="number"
                      id={`item_${index}_subtotal`}
                      value={formatPrice(watch(`products.${index}.quantity`) * watch(`products.${index}.price`))}
                      disabled
                    />
                    <BanknotesIcon className={iconStyle} />
                  </div>

                  {/* Remove item */}
                  <div className="mt-6">
                    <button className="flex h-9 items-center rounded-md px-4 text-sm font-medium text-white bg-red-600 hover:bg-red-500 ease-in duration-100"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      <TrashIcon className="h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit invoice */}
        <div className="mt-2 text-center">
          <button className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-500 ease-in duration-100"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : action}
          </button>
        </div>
      </form>
    </>
  );
}