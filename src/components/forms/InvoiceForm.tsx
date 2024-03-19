'use client';

import { BanknotesIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { useState } from "react";

const inputNoIconStyle = "block w-full rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500";
const inputIconStyle = "peer block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
const iconStyle = "pointer-events-none absolute mt-3 left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600";

const initData = {
  name: '',
  email: '',
  company: '',
  amount: 0,
  status: 'pending',
};

export default function InvoiceForm({ buttonText, id }: {
  buttonText: string,
  id?: string,
}) {
  const [formData, setFormData] = useState(initData);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }
  
  function handleSubmit(event: any) {
    event.preventDefault();
  }

  return (
    <form action={"/api/invoiceHandler/create"} method="POST" onSubmit={handleSubmit}>
      <div className="flex flex-col mt-4 items-center justify-center">
        <div className="p-8 w-96 shadow-lg rounded-md bg-slate-800">
          <div className="px-7 py-3">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name">Name:</label>
              <input className={inputNoIconStyle}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="John Doe" 
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="relative mt-4">
              <label htmlFor="email">Email:</label>
              <input className={inputNoIconStyle}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="any@mail.com" 
                onChange={handleChange}
                required
              />
            </div>
            
            {/* Company */}
            <div className="relative mt-4">
              <label htmlFor="company">Company:</label>
              <input className={inputIconStyle}
                type="text"
                name="company"
                id="company"
                value={formData.company}
                placeholder="Big Corp Ltd." 
                onChange={handleChange}
              />
              <BuildingOffice2Icon className={iconStyle} />
            </div>
            
            <div className="relative mt-4">
              <label htmlFor="amount">Amount:</label>
              <input className={inputIconStyle}
                type="number"
                name="amount"
                id="amount"
                value={formData.amount}
                placeholder="Amount" 
                onChange={handleChange}
                required
              />
              <BanknotesIcon className={iconStyle} />
            </div>
            
            {/* Status */}
            <div className="relative mt-4">
              <label>Status:</label>
              <div className="mt-2">
                {/* Status: Pending */}
                <input className="w-1/2 placeholder:text-gray-500"
                  type="radio"
                  name="status"
                  id="pending"
                  value="pending"
                  onChange={handleChange}
                  checked={formData.status === "pending"}
                />
                <label className="text-sm" htmlFor="pending">Pending</label>

                {/* Status: Paid */}
                <input className="w-1/2 placeholder:text-gray-500"
                  type="radio"
                  name="status"
                  id="paid"
                  value="paid"
                  onChange={handleChange}
                  checked={formData.status === "paid"}
                />
                <label className="text-sm" htmlFor="paid">Paid</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-center">
        <button className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-500 ease-in duration-100"
          type="submit"
        >
          {buttonText}
        </button>          
      </div>
    </form>
  );
}