import { IdentificationIcon, KeyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex flex-col items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Login</h3>
          <div className="mt-2 px-7 py-3">
            
            <div>
              <div className="relative">
              <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                placeholder="Username" />
                <IdentificationIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
            
            <div className="mt-4">
              <div className="relative">
                <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500" 
                  placeholder="Password" />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>

          </div>
        </div>

        <div className="flex justify-center mt-4">
          <Link className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-300 ease-in duration-100"
            href={"/"}
          >
            Login
          </Link>
        </div>

        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-300 ease-in duration-100"
            onClick={router.back}>
            Close
          </button>
          {/* <Link className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-300 ease-in duration-100"
            href={router.back}
          >
            Close
          </Link> */}
        </div>
      </div>
    </div>
  );
}