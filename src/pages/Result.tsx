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
        <div>
          <h3 className="font-bold text-2xl text-center mb-2 ml-3">
            You follow but they don’t follow back :
          </h3>
          <TableResult
            data={result.notFollowingBack}
            message="Everyone you follow follows you back"
          />
        </div>
        <div>
          <h3 className="font-bold text-2xl text-center mb-2 ml-3">
            They follow you but you don’t follow back :
          </h3>
          <TableResult
            data={result.notFollowedBack}
            message="You follow everyone who follows you"
          />
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
