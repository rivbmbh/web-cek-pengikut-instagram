// 📁 src/components/tables/columns.ts
import type { TableData } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

// Bisa kamu buat tipe data lebih spesifik kalau mau

export const getColumns = (isFollowing: boolean): ColumnDef<TableData>[] => [
  {
    accessorKey: "username",
    header: () => "Username",
    cell: (info) => {
      const original = info.row.original;
      return (
        <a
          href={original.link ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:underline"
        >
          {info.getValue()}
        </a>
      );
    },
  },
  {
    accessorKey: "time",
    header: () => (isFollowing ? "Following Since" : "Followed Since"),
    cell: (info) =>
      info.getValue()
        ? new Date((info.getValue() as number) * 1000).toLocaleString()
        : "Unknown",
  },
];
