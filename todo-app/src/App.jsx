import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "./features/todos/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };

  
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 text-blue-600">
      <h1 className="text-3xl font-bold mb-6">TODO List</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded w-64 bg-white text-xl"
          placeholder="Додати завдання..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-yellow-300 text-2xl cursor-pointer px-4 py-2 rounded hover:bg-blue-700"
        >
          Додати
        </button>
      </form>

      <ul className="w-full max-w-md space-y-2  mb-4">
        {todos.map((todo, index) => (
          <li key={index} className="bg-white p-2 rounded-xl bg-yellow-300 text-2xl shadow">
            {todo}
          </li>
        ))}
      </ul>

      <footer className="text-blue-600 text-xl">
        Загальна кількість TODO задач: <b>{todos.length}</b>
      </footer>
    </div>
  );
}

export default App;
