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
        description: "Learning about React and Tailwind",
        day: "3th may at 12:44",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: "Paiting",
        description: "Painting the square with Floripa image",
        day: "3th may at 17:30",
        isCompleted: false,
      },
      {
        id: uuidv4(),
        title: "Home organizing",
        description: "To do the dishes and check the lunch for tomorrow",
        day: "3th may at 18:30",
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
  console.log(tasks);

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
    <div className="w-screen h-screen bg-linear-to-br from-mauve-800 to-mauve-600">
      <div className="space-y-5">
        <h1 className="bg-linear-to-tr bg-clip-text from-neutral-100 to-neutral-300 text-transparent text-3xl p-10 m-auto text-center font-bold">
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
