import type { SearchingProps } from "@/types";

const Searching = ({ globalFilter, setGlobalFilter }: SearchingProps) => {
  //   const [globalFilter, setGlobalFilter] = useState("");

  return (
    <>
      <div className="flex items-center gap-1 w-full  sm:w-max">
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="input input-sm"
        />
        <button
          onClick={() => setGlobalFilter("")}
          className="btn btn-sm btn-neutral"
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default Searching;
