'use client';

import { setAuthTokens } from "@/lib/actions/auth.action";
import { login } from "@/lib/actions/login.action";
import { loginFormBody, loginFormBodyType } from "@/lib/schema/auth.schema";

import { IdentificationIcon, KeyIcon } from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const inputStyle = "peer block w-full rounded-md py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500";
const iconStyle = "pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-600";

export default function LoginModal() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {register, handleSubmit, formState: { errors }} = useForm<loginFormBodyType>({
    resolver: zodResolver(loginFormBody),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const loginSuccess = (tokens: { refresh: string, access: string }) => {
    setAuthTokens(tokens);
  };

  async function onSubmit(data: loginFormBodyType) {
    setIsLoading(true);

    try {
      const validatedData = loginFormBody.parse(data);

      const tokens = await login(validatedData);

      if (tokens) {
        loginSuccess(tokens);
        console.log("Login success");

        toast("Login success", {
          description: "Redirecting now...",
        });
        
        router.push(pathname);
      }
    } catch (error: any) {
      toast("Login failed", {
        description: "Please check your login credentials."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex flex-col items-center justify-center">
          <div className="p-8 w-96 shadow-lg rounded-md bg-slate-800">
            <h3 className="text-2xl text-center font-bold">Login</h3>

            <div className="mt-2 px-7 py-3">
              <div className="relative">
                <input className={inputStyle} 
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                  required
                />
                <IdentificationIcon className={iconStyle} />
              </div>
              {errors.username && <div className="text-red-500">{errors.username.message}</div>}
              
              <div className="relative mt-4">
                <input className={inputStyle} 
                  type="password"
                  placeholder="Password" 
                  {...register("password")}
                  required
                />
                <KeyIcon className={iconStyle} />
              </div>
              {errors.password && <div className="text-red-500">{errors.password.message}</div>}
            </div>

            <div className="flex justify-center mt-4">
              <button className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-green-500 ease-in duration-100"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>
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