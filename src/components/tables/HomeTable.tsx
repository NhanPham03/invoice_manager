import clsx from "clsx";

const members = [
  { key: 1, id: "21110765", name: "Đinh Thành Đức", role: "Dev", position: "Full Stack" },
  { key: 2, id: "21110105", name: "Nguyễn Phương Anh Tú", role: "Dev", position: "Back-End" },
  { key: 3, id: "21110776", name: "Phạm Anh Khoa", role: "P.O", position: "" },
  { key: 4, id: "21110066", name: "Phạm Vũ Bảo Nhân", role: "Dev", position: "Full Stack" },
  { key: 5, id: "21110808", name: "Nguyễn Lê Quốc Trung", role: "Dev", position: "" },
  { key: 6, id: "21110008", name: "Thái Minh Bằng", role: "S.M", position: "" },
  { key: 7, id: "20110365", name: "Võ Hữu Đức", role: "Dev", position: "" },
  { key: 8, id: "21110756", name: "Nguyễn Đình Minh Chiến", role: "Dev", position: "" },
];

export default function HomeTable() {
  return (
    <table className="hidden min-w-full rounded-md bg-slate-800 md:table">
      <thead>
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            ID
          </th>
          <th scope="col" className="px-4 py-5 font-medium">
            Name
          </th>
          <th scope="col" className="px-4 py-5 font-medium">
            Role
          </th>
        </tr>
      </thead>
      <tbody>
      {members.map((member) => {
        return (
          <tr className="w-full border-b py-3 text-sm bg-slate-700 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            key={member.key}
          >
            <td className="whitespace-nowrap p-3 text-center">
              <p>{member.id}</p>
            </td>
            <td className="whitespace-nowrap p-3">
              <p>{member.name}</p>
            </td>
            <td className="whitespace-nowrap p-3 text-center">
              <p className={clsx(
                {
                  "text-red-500": member.role === "P.O",
                  "text-sky-500": member.role === "S.M",
                  "text-lime-500": member.role === "Dev",
                },
              )}
              >
                {member.position !== "" ? 
                  `${member.role} (${member.position})` : 
                  `${member.role}`
                }
              </p>
            </td>
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}