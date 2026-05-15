import { useState } from "react";

function AddNewTask({ addTaskOnList }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="flex bg-mauve-200 space-y-5 mx-auto max-w-md p-10 rounded-2xl flex-col shadow-md">
      <input
        type="text"
        placeholder="Type your new task"
        id="newTask"
        className="bg-white border-mauve-800 border-2 focus:outline-mauve-800  py-0.5 px-1.5 rounded-md"
        value={title}
        onChange={function addTitle(event) {
          setTitle(event.target.value);
        }}
      />
      <textarea
        type="text"
        placeholder="Describe your task here"
        id="desc"
        className="bg-white border-mauve-800 border-2
        focus:outline-mauve-800 py-0.5 px-1.5 rounded-md"
        value={description}
        onChange={function addDescrip(event) {
          setDescription(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(
              "Please fill in the title and description of your task",
            );
          }
          addTaskOnList(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-mauve-500 text-white rounded-md max-w-min px-5 py-1 border-2 border-mauve-600 font-medium mx-auto"
      >
        Add
      </button>
    </div>
  );
}

export default AddNewTask;
