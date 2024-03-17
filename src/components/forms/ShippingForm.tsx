'use client';

import { useState } from "react";

const inputStyle = "block w-full rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500";

export default function ShippingForm() {
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    province: '',
    postal_code: '',
    country: '',
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
        <div className="relative w-2/3">
          <input className={inputStyle} 
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address" 
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="relative w-1/3">
          <input className={inputStyle} 
            type="text"
            name="city"
            value={formData.city}
            placeholder="City / District" 
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-row gap-2 mt-4">
        <div className="relative w-1/3">
          <input className={inputStyle} 
            type="text"
            name="province"
            value={formData.province}
            placeholder="State / Province" 
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="relative w-1/3">
          <input className={inputStyle} 
            type="text"
            name="postal_code"
            value={formData.postal_code}
            placeholder="Postal code" 
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="relative w-1/3">
          <input className={inputStyle} 
            type="text"
            name="country"
            value={formData.country}
            placeholder="Country" 
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </>
  );
}
