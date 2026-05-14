import { ChevronsLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";

function DetailsTask() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const idSelectTask = searchParams.get("id");
  const titleSelectTask = searchParams.get("title");
  const descSelectTask = searchParams.get("description");

  console.log(idSelectTask);
  console.log(titleSelectTask);
  console.log(descSelectTask);

  return (
    <div className="w-screen h-screen bg-gre-900 p-6">
      <h1 className="text-fuchsia-400 text-3xl p-10 m-auto text-center font-bold">
        Task Details
      </h1>
      <div className="flex-col justify-center bg-slate-300 max-w-md mx-auto p-5 rounded-2xl">
        <h2 className="text-fuchsia-700 items-center text-center m-5 font-bold text-2xl text-fuchsia-00">
          {titleSelectTask}
        </h2>
        <p>{descSelectTask}</p>
        <div className="flex justify-left relative mt-10 text-fuchsia-600 ">
          <button
            onClick={() => navigate(-1)}
            className=" left-0 top-0 bottom-0"
          >
            <ChevronsLeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsTask;
