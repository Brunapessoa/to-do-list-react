import { ChevronRight, Trash2 } from "lucide-react";
import { Link } from "react-router";

function Tasks({ tasksList, checkTask, deleteTask }) {
  function urlSelectedTask(task) {
    const query = new URLSearchParams();
    query.set("id", task.id);
    query.set("title", task.title);
    query.set("description", task.description);

    return `/details?${query.toString()}`;
  }

  return (
    <div className="flex-col justify-center bg-mauve-200 mx-auto max-w-md p-10 rounded-2xl shadow-md">
      <h2 className="bg-linear-to-tr bg-clip-text from-mauve-500 to-mauve-600 text-transparent text-2xl pb-10 m-auto text-center font-bold">
        Tasks List
      </h2>
      <div>
        <ul className="space-y-4">
          {tasksList.map((task) => (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => checkTask(task.id)}
                className={`bg-mauve-600 text-white p-2 rounded-md w-full text-left ${task.isCompleted && "line-through"}`}
              >
                {task.isCompleted && "Completed "}
                {task.title}
              </button>
              <Link
                to={urlSelectedTask(task)}
                className="bg-mauve-600 text-white p-2 rounded-md"
              >
                <ChevronRight size={28} strokeWidth={3} absoluteStrokeWidth />
              </Link>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-mauve-600 text-white p-2 rounded-md"
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
