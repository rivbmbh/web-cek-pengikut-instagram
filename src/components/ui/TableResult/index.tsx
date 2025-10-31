// src/components/ui/TableResult.tsx
import type { TableResultProps } from "@/types";
import { flexRender } from "@tanstack/react-table";

const TableResult = ({ table, message, isEnglish }: TableResultProps) => {
  const rows = table.getRowModel().rows;
  const { pageIndex, pageSize } = table.getState().pagination;

  return (
    <div className="overflow-x-auto">
      {rows.length > 0 ? (
        <table className="table w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup: any) => (
              <tr
                key={headerGroup.id}
                className="font-bold text-base text-accent"
              >
                {headerGroup.headers.map((header: any) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {rows.map((row: any, rowIndex: number) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell: any) => {
                  // Jika kolom pertama adalah "No", kita render nomor baris dari pagination
                  if (cell.column.id === "no") {
                    const globalNumber = pageIndex * pageSize + rowIndex + 1;
                    return <td key={cell.id}>{globalNumber}</td>;
                  }
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <div className="flex justify-center w-full">
            <img src="/yeaay.webp" alt="icon-capybara" className="mt-5" />
          </div>
          <p className="text-center font-semibold text-lg">
            {isEnglish ? message[0] : message[1]}
          </p>
        </div>
      )}
    </div>
  );
};

export default TableResult;
