const ShowEntrieDataTable = ({
  paginationFollowing,
  handlePageSizeChange,
}: any) => {
  return (
    <>
      <div className="flex items-center gap-3 w-max">
        <label className="text-sm font-medium">Show</label>
        <select
          value={paginationFollowing.pageSize}
          onChange={handlePageSizeChange}
          className="select select-sm"
        >
          {[5, 10, 25, 50].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
        <span className="text-sm">entries</span>
      </div>
    </>
  );
};

export default ShowEntrieDataTable;
