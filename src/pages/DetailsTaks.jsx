import { ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function DetailsTask() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const idSelectTask = searchParams.get("id");
  const titleSelectTask = searchParams.get("title");
  const descSelectTask = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-linear-to-br from-mauve-700 to-mauve-500 p-6">
      <h1 className="bg-linear-to-tl bg-clip-text from-white to-mauve-200 text-transparent text-3xl p-10 m-auto text-center font-bold">
        Task Details
      </h1>
      <div className="flex flex-col justify-center  bg-mauve-200 mx-auto max-w-md p-10 rounded-2xl shadow-md">
        <h2 className="bg-linear-to-tr bg-clip-text from-mauve-500 to-mauve-600 text-transparent text-2xl pb-10 m-auto text-center font-bold">
          {titleSelectTask}
        </h2>
        <p className="break-words">{descSelectTask}</p>
        <div className="flex justify-left relative mt-10 text-mauve-600 ">
          <button onClick={() => navigate(-1)} className="left-0 bottom-0">
            <ChevronsLeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsTask;
