const TableResult = ({ data, message }: any) => {
  return (
    <>
      <div className="overflow-x-auto">
        {data.length > 0 ? (
          <table className="table">
            <thead>
              <tr className="font-bold text-base text-accent">
                <th>No</th>
                <th>Name</th>
                <th>Followed since</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v: any, i: number) => (
                <tr key={v.username}>
                  <td>{i + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="font-semibold hover:underline">
                        <a href={v.link}>{v.username}</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="block text-sm text-gray-500">
                      {v.time
                        ? new Date(v.time * 1000).toLocaleString()
                        : "Unknown"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <div className="flex justify-center w-full">
              <img src="yeaay.webp" alt="icon-capybara" className="mt-5" />
            </div>
            <p className="text-center font-semibold text-lg">{message}</p>
          </div>
        )}
      </div>
    </>
  );
};
export default TableResult;
