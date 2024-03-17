'use client';

import { AtSymbolIcon, CheckCircleIcon, IdentificationIcon, KeyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useState } from "react";

const inputStyle = "block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
const iconStyle = "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600";

export default function RegisterModal() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  function handleInputChange(event: any) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const res = await fetch('/api/accountHandler', {
        method: 'PUT',
        body: formData,
      });

      const data = await res.json();
      console.log(data); // LINES 42, 43 STILL DOESN'T WORK

      if (!res.ok) {
        throw new Error("Error occurred while processing request");
      }
    } catch (error: any) {
      setError(error.message);
      console.error('ERROR: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && <div className="text-red-500">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex flex-col items-center justify-center">
          <div className="p-8 w-96 shadow-lg rounded-md bg-slate-800">
            <h3 className="text-2xl text-center font-bold">Register</h3>

            <div className="mt-2 px-7 py-3">
              <div className="relative">
                <input className={inputStyle} 
                  type="text" 
                  name="username"
                  value={formData.username}
                  placeholder="Username" 
                  onChange={handleInputChange}
                  required
                />
                <IdentificationIcon className={iconStyle} />
              </div>
              
              <div className="mt-4 grid grid-cols-2 grid-rows-1 gap-2">
                <input className="block w-full rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500" 
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  placeholder="First name" 
                  onChange={handleInputChange}
                  required
                />
                <input className="block w-full rounded-md py-[9px] pl-3 text-sm outline-2 placeholder:text-gray-500" 
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  placeholder="Last name" 
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="relative mt-4">
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
              
              <div className="relative mt-4">
                <input className={inputStyle} 
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password" 
                  onChange={handleInputChange}
                  required
                />
                <KeyIcon className={iconStyle} />
              </div>

              <div className="relative mt-4">
                <input className={inputStyle} 
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  placeholder="Confirm password" 
                  onChange={handleInputChange}
                  required
                />
                <CheckCircleIcon className={iconStyle} />
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-500 ease-in duration-100"
                type="submit"
              >
                {isLoading ? 'Loading...' : 'Register'}
              </button>
            </div>

            <div className="flex justify-center mt-4 gap-1">
              <p>Already have an account?</p>
              <Link className="text-blue-500 underline hover:text-blue-300"
                href={pathname + "?show=login"}
              >
                Log in!
              </Link>
            </div>

            <div className="flex justify-center mt-4">
              <Link className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-500 ease-in duration-100"
                href={pathname}
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}