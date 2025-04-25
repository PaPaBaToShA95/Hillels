import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import LoadingIndicator from "./LoadingIndicator";
import ErrorMessage from "./ErrorMessage";
import { loadTodos, clearCompletedAsync } from "../sagas/todosSagas";

const TodoApp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);
  const todos = useSelector((state) => state.todos.items);

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleClearCompleted = () => {
    dispatch(clearCompletedAsync());
  };

  return (
    <div className="p-6 w-4/5 flex items-center flex-col mx-auto bg-gray-500 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
       Список завдань з використанням Redux-SAGA
      </h1>
      <AddTodoForm />
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && todos.length === 0 && (
        <div className="text-gray-500 w-5/6 text-center mt-4">Наразі немає жодних завдань!</div>
      )}
      {!loading && !error && todos.length > 0 && <TodoList />}

      {todos.length > 0 && (
        <div className="mt-4  text-center">
          <button
            onClick={handleClearCompleted}
            className="p-2 bg-yellow-500 text-black rounded text-sm hover:bg-yellow-600"
          >
            Очистити завершені ({todos.filter((todo) => todo.completed).length})
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
