import { useState } from "react";

export default function NewTask({onAdd}) {
  //empty string as default value to tell react that this is a controlled state
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function hadleClick(){
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={hadleClick}>Add Task</button>
    </div>
  );
}
