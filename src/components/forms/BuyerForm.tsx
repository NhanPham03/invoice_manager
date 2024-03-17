'use client';

import { AtSymbolIcon, BuildingOfficeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const inputStyle = "block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
const iconStyle = "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600";

export default function BuyerForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    phone_number: '',
  });

  function handleInputChange(event: any) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="flex flex-row gap-2 mt-4">
        <input className="block w-1/4 rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500"
          type="text"
          name="first_name"
          value={formData.first_name}
          placeholder="First name" 
          onChange={handleInputChange}
          required
        />
        <input className="block w-1/4 rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500" 
          type="text"
          name="last_name"
          value={formData.last_name}
          placeholder="Last name" 
          onChange={handleInputChange}
          required
        />
        <div className="relative w-1/2">
          <input className={inputStyle} 
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email" 
            onChange={handleInputChange}
            required
          />
          <AtSymbolIcon className={iconStyle} />
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-4">
        <div className="relative w-1/2">
          <input className={inputStyle} 
            type="text"
            name="company"
            value={formData.company}
            placeholder="Company name" 
            onChange={handleInputChange}
          />
          <BuildingOfficeIcon className={iconStyle} />
        </div>
        <div className="relative w-1/2">
          <input className={inputStyle} 
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            placeholder="Phone number" 
            onChange={handleInputChange}
            required
          />
          <PhoneIcon className={iconStyle} />
        </div>
      </div>
    </>
  );
}
