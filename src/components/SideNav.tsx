import { CommandLineIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";
import AccountButton from "./buttons/AccountButton";

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-3 py-4 md:px-2">
      <div className="mb-2 flex gap-2 h-20 items-end justify-start rounded-md bg-green-800 p-4 md:h-40">
        <CommandLineIcon className="h-8 w-8" />
        <h3 className="font-bold">NotFound404</h3>
      </div>
      
      <div className="flex flex-row md:flex-col grow justify-between space-x-2 md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-800 md:block"></div>
        <AccountButton />
      </div>
    </div>
  );
}