import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, done: false }]);
      setText("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Список справ</h2>
      <form onSubmit={addTodo} className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Нова справа..."
          className="border p-2 flex-grow rounded"
        />
        <button className="bg-blue-600 text-white px-4 rounded">Додати</button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded shadow"
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`flex-grow cursor-pointer ${todo.done ? "line-through text-gray-500" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 ml-4"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
