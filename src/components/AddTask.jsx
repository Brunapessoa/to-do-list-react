import { useState } from "react";

function AddNewTask({ addTaskOnList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex bg-slate-300 space-y-5 mx-auto max-w-md p-10 rounded-2xl flex-col">
      <input
        type="text"
        placeholder="Type your new task"
        id="newTask"
        className="bg-white border-slate-700 border-2 focus:outline-slate-600  py-0.5 px-1 rounded-md"
        value={title}
        onChange={function addTitle(event) {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Discribe your task here"
        id="desc"
        className="bg-white border-slate-700 border-2 focus:outline-slate-600 py-0.5 px-1 rounded-md"
        value={description}
        onChange={function addDescrip(event) {
          setDescription(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Type the title or description of your taks");
          }
          addTaskOnList(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white rounded-md max-w-min px-5 py-1 border-2 border-slate-700 font-medium mx-auto"
      >
        Add
      </button>
    </div>
  );
}

export default AddNewTask;
