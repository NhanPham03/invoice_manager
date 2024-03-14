'use client';

import { useRouter } from "next/router";

export default function Button({ props }: {  }) {
  const router = useRouter();

  return (
    <button className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-300 ease-in duration-100">
      {name}
    </button>
  );
}