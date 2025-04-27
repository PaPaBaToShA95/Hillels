import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../store/features/todos/todosActions";

const AddTodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodoAsync(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Додати нове завдання..."
        className="flex-grow p-2 border rounded text-black"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-xl">
        Додати
      </button>
    </form>
  );
};

export default AddTodoForm;
