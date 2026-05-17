import { useEffect, useState } from "react";
import "./App.css";
import AddNewTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 as uuidv4 } from "uuid"; //lib para gerar id aleatorios

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("localTasksList");

    if (saved) {
      return JSON.parse(saved);
    }
    return [
      {
        id: 1,
        title: "Study Software Programming",
        description:
          "Review React hooks concepts, practice building components with Tailwind CSS, and complete at least two exercises from the current module. Take notes on anything unclear to revisit later.",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: "Physical Exercise",
        description:
          "Go for a 30-minute walk or do a home workout session. Stretch before and after to avoid injury. Stay hydrated and track your progress to keep the habit consistent.",
        isCompleted: false,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("localTasksList", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(titleTyped, desciptionTyped) {
    const newTask = {
      id: uuidv4(),
      title: titleTyped,
      description: desciptionTyped,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function checkStatusTask(idOfTask) {
    const newTaskList = tasks.map((task) => {
      if (idOfTask === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTaskList);
  }

  function deleteTask(idOfTask) {
    const updatedList = tasks.filter((task) => {
      if (task.id !== idOfTask) {
        return true; // as tasks que tiverem o id diferente do clicado, mantém
      }
      return false;
    });
    setTasks(updatedList);
  }

  return (
    <div className="w-screen min-h-screen bg-linear-to-br from-mauve-800 to-mauve-500 px-4 pb-4">
      <div className="space-y-5">
        <h1 className="bg-linear-to-tl bg-clip-text from-white to-mauve-200 text-transparent text-3xl p-10 m-auto text-center font-bold">
          Tasks Management
        </h1>
        <AddNewTask addTaskOnList={addTask} />
        <Tasks
          tasksList={tasks}
          checkTask={checkStatusTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
