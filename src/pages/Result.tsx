import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableResult from "@/components/ui/TableResult";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import Pagination from "@/components/ui/Pagination";
import Searching from "@/components/ui/Searching";
import ShowEntrieDataTable from "@/components/ui/ShowEntriesDataTable";
import { getColumns } from "@/components/ui/TableResult/columns";

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state as
    | { notFollowingBack: any[]; notFollowedBack: any[] }
    | undefined;

  if (!result) {
    return (
      <div className="text-center mt-10">
        <img src="/blee.webp" alt="capybara" className="mx-auto" />
        <p className="text-base font-semibold my-4">
          No data found. Please upload your files first.
        </p>
        <button
          onClick={() => navigate("/upload")}
          className="btn btn-accent mt-4"
        >
          Go to Upload Page
        </button>
      </div>
    );
  }

  // 🔹 Kolom tabel
  const columnsFollowing = useMemo(() => getColumns(true), []);
  const columnsFollowed = useMemo(() => getColumns(false), []);

  // 🔹 Search global (bisa dipakai bareng dua tabel)
  const [globalFilter, setGlobalFilter] = useState("");

  // 🔹 Pagination & Sorting per tabel
  const [paginationFollowing, setPaginationFollowing] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [paginationFollowed, setPaginationFollowed] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const [sortingFollowing, setSortingFollowing] = useState<SortingState>([]);
  const [sortingFollowed, setSortingFollowed] = useState<SortingState>([]);

  // 🔹 Table 1 (Not Following Back)
  const tableFollowing = useReactTable({
    data: result.notFollowingBack ?? [],
    columns: columnsFollowing,
    state: {
      globalFilter,
      pagination: paginationFollowing,
      sorting: sortingFollowing,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPaginationFollowing,
    onSortingChange: setSortingFollowing,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });

  // 🔹 Table 2 (Not Followed Back)
  const tableFollowed = useReactTable({
    data: result.notFollowedBack ?? [],
    columns: columnsFollowed,
    state: {
      globalFilter,
      pagination: paginationFollowed,
      sorting: sortingFollowed,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPaginationFollowed,
    onSortingChange: setSortingFollowed,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });

  // 🔹 Ubah jumlah row per halaman (untuk kedua tabel serentak)
  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = Number(e.target.value);
    setPaginationFollowing((prev) => ({
      ...prev,
      pageSize: size,
      pageIndex: 0,
    }));
    setPaginationFollowed((prev) => ({
      ...prev,
      pageSize: size,
      pageIndex: 0,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Search & Show Per Page */}
      <div className="flex flex-wrap gap-4 justify-baseline sm:justify-between mb-10">
        <ShowEntrieDataTable
          paginationFollowing={paginationFollowing}
          handlePageSizeChange={handlePageSizeChange}
        />

        <Searching
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      {/* Dua tabel hasil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-10">
        {/* TABLE 1 */}
        <div>
          <h3 className="font-bold text-2xl text-center mb-2">
            You follow but they don’t follow back
          </h3>
          <TableResult
            table={tableFollowing}
            message="Everyone you follow follows you back"
          />
          <Pagination table={tableFollowing} />
        </div>
        <hr className="block sm:hidden" />
        {/* TABLE 2 */}
        <div className="">
          <h3 className="font-bold text-2xl text-center mb-2">
            They follow you but you don’t follow back
          </h3>
          <TableResult
            table={tableFollowed}
            message="You follow everyone who follows you"
          />
          <Pagination table={tableFollowed} />
        </div>
      </div>

      <div className="text-center mt-14">
        <button onClick={() => navigate("/upload")} className="btn btn-accent">
          Check Again
        </button>
      </div>
    </div>
  );
};

export default Result;
