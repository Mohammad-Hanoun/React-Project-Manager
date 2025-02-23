import Modal from "./Modal.jsx";

import { useState, useRef } from "react";


export default function NewTask({ onAdd }) {
  //empty string as default value to tell react that this is a controlled state
  const [enteredTask, setEnteredTask] = useState("");

  const modal = useRef(null);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function hadleClick() {
    if (enteredTask.trim().length === 0) {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you entered an empty task.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for the input field
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          onChange={handleChange}
          value={enteredTask}
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={hadleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
