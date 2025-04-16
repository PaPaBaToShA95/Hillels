import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onSubmit = (data) => {
    const newTodo = {
      id: Date.now(),
      text: data.todo,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    reset();
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6  shadow rounded">
        <h1 className="text-2xl font-bold mb-4 text-center">TODO List</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2 mb-4">
          <input
            className="flex-grow border p-2 rounded"
            placeholder="Введіть завдання"
            {...register("todo", {
              required: "Це поле обов’язкове",
              minLength: {
                value: 5,
                message: "Мінімум 5 символів",
              },
            })}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Додати
          </button>
        </form>

        {errors.todo && (
          <p className="text-red-500 text-sm mb-2">{errors.todo.message}</p>
        )}

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border rounded"
            >
              <label className="flex items-center gap-2 w-full">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleCompleted(todo.id)}
                />
                <span
                  className={`flex-grow ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>

        {todos.length > 0 && (
          <button
            onClick={clearAll}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Очистити все
          </button>
        )}
      </div>
    </div>
  );
}
