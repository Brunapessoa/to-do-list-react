import { ChevronRight, Trash2 } from "lucide-react";
import { Link } from "react-router";

function Tasks({ tasksList, checkTask, deleteTask }) {
  console.log();

  function urlSelectedTask(task) {
    const query = new URLSearchParams();
    query.set("id", task.id);
    query.set("title", task.title);
    query.set("description", task.description);

    return `/details?${query.toString()}`;
  }

  return (
    <div className="flex-col justify-center bg-slate-300 max-w-md mx-auto p-5 rounded-2xl">
      <h2 className="text-fuchsia-700 items-center text-center m-5 font-bold text-2xl text-fuchsia-00">
        Taks List
      </h2>
      <div>
        <ul className="space-y-4">
          {tasksList.map((task) => (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => checkTask(task.id)}
                className={`bg-gray-600 text-white p-2 rounded-md w-full text-left ${task.isCompleted && "line-through"}`}
              >
                {task.isCompleted && "Completed "}
                {task.title}
              </button>
              <Link
                to={urlSelectedTask(task)}
                className="bg-gray-600 text-white p-2 rounded-md"
              >
                <ChevronRight size={28} strokeWidth={3} absoluteStrokeWidth />
              </Link>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-gray-600 text-white p-2 rounded-md"
              >
                <Trash2 size={20} strokeWidth={1.5} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Tasks;
