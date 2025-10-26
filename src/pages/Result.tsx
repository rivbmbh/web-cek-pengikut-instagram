import TableResult from "@/components/ui/TableResult";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state as
    | { notFollowingBack: any; notFollowedBack: any }
    | undefined;

  if (!result) {
    // Jika user langsung buka /result tanpa upload
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

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* <TableResult /> */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            You follow but they don’t follow back:
          </h3>
          {result.notFollowingBack.length > 0 ? (
            <ul className="list-disc ml-5">
              {result.notFollowingBack.length > 0 ? (
                <ul className="list-disc ml-5 space-y-2">
                  {result.notFollowingBack.map((data: any) => (
                    <li key={data.username}>
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-500 hover:underline"
                      >
                        {data.username}
                      </a>
                      <span className="block text-sm text-gray-500">
                        Followed since:{" "}
                        {data.time
                          ? new Date(data.time * 1000).toLocaleString()
                          : "Unknown"}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Everyone you follow follows you back 🎉</p>
              )}
            </ul>
          ) : (
            <p>Everyone you follow follows you back 🎉</p>
          )}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">
            They follow you but you don’t follow back:
          </h3>
          {result.notFollowedBack.length > 0 ? (
            <ul className="list-disc ml-5 space-y-2">
              {result.notFollowingBack.map((data: any) => (
                <li key={data.username}>
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    {data.username}
                  </a>
                  <span className="block text-sm text-gray-500">
                    Followed since:{" "}
                    {data.time
                      ? new Date(data.time * 1000).toLocaleString()
                      : "Unknown"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Everyone you follow follows you back 🎉</p>
          )}
        </div>
      </div>

      <div className="text-center mt-10">
        <button onClick={() => navigate("/upload")} className="btn btn-accent">
          Check Again
        </button>
      </div>
    </div>
  );
};

export default Result;
