import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TableResult from "@/components/ui/TableResult";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
} from "@tanstack/react-table";
import Pagination from "@/components/ui/Pagination";
import Searching from "@/components/ui/Searching";
import ShowEntrieDataTable from "@/components/ui/ShowEntriesDataTable";
import { getColumns } from "@/components/ui/TableResult/columns";
import { useChangeLanguage } from "@/features/language/components/ChangeLanguageContext";

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isEnglish } = useChangeLanguage();

  const result = location.state as
    | { notFollowingBack: any[]; notFollowedBack: any[] }
    | undefined;

  if (!result) {
    return (
      <>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <div className="text-center">
                <img src="/blee.webp" alt="capybara" className="mx-auto" />
                <p className="text-base font-semibold my-4">
                  {isEnglish
                    ? "No data found. Please upload your files first."
                    : "Tidak ada data ditemukan. Upload terlebih dahulu filenya"}
                </p>
                <button
                  onClick={() => navigate("/upload")}
                  className="btn btn-accent mt-4"
                >
                  {isEnglish
                    ? "Go to Upload Page"
                    : "Kembali ke halaman Upload"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
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
            {isEnglish
              ? "You follow but they don’t follow back"
              : "Kamu ikuti mereka tapi kamu nggak diikuti balik"}
          </h3>
          <TableResult
            table={tableFollowing}
            message={[
              "Everyone you follow, follows you back",
              "Semua orang yang ikuti kamu, mengikuti balik kamu juga",
            ]}
            isEnglish={isEnglish}
          />
          <Pagination table={tableFollowing} />
        </div>
        <hr className="block sm:hidden" />
        {/* TABLE 2 */}
        <div className="">
          <h3 className="font-bold text-2xl text-center mb-2">
            {isEnglish
              ? "They follow you but you don’t follow back"
              : "Mereka ikuti kamu tapi kamu nggak ikuti balik"}
          </h3>
          <TableResult
            table={tableFollowed}
            message={[
              "You follow everyone who follows you",
              "Kamu mengikuti semua orang yang ikuti kamu juga",
            ]}
            isEnglish={isEnglish}
          />
          <Pagination table={tableFollowed} />
        </div>
      </div>

      <div className="text-center mt-14">
        <button onClick={() => navigate("/upload")} className="btn btn-accent">
          {isEnglish ? "Check Again" : "Cek Ulang"}
        </button>
      </div>
    </div>
  );
};

export default Result;
